import { useEffect, useState } from 'react';
import { ISpellByClass } from './types/ISpellByClass';
import { ISpellDetails } from './types/ISpellDetails';

export const useSpellByClass = (
  spellClass: string,
  page: number,
  limit: number
): [ISpellByClass | null, boolean, unknown | null] => {
  const [data, setData] = useState<ISpellByClass | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);
  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const response = await fetch(
          `https://www.dnd5eapi.co/api/classes/${spellClass}/spells`
        );
        if (!response.ok) {
          throw new Error('Error while retriving the data!');
        }
        const responseData = await response.json();
        const fakePaginatedData = {
          ...responseData,
          results: responseData.results.slice((page - 1) * limit, page * limit),
        };
        setData(fakePaginatedData);
      } catch (networkError) {
        setError(networkError);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [spellClass, page, limit]);
  return [data, isLoading, error];
};

export const useSpellDetails = (
  spellIndex?: string
): [ISpellDetails | null, boolean, unknown | null] => {
  const [data, setData] = useState<ISpellDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);
  useEffect(() => {
    if (spellIndex) {
      setIsLoading(true);
      (async () => {
        try {
          const response = await fetch(
            `https://www.dnd5eapi.co/api/spells/${spellIndex}`
          );
          if (!response.ok) {
            throw new Error('Error while retriving the data!');
          }
          const spellData = await response.json();
          setData(spellData);
        } catch (networkError) {
          setError(networkError);
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [spellIndex]);
  return [data, isLoading, error];
};
