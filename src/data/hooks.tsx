import { useEffect, useState } from "react";
import { ISpellByClass } from "../data/types/ISpellByClass";
import { ISpellDetails } from "../data/types/ISpellDetails";

export const useSpellByClass = (
  spellClass: string
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
          throw new Error("Error while retriving the data!");
        }
        const data = await response.json();
        setData(data as ISpellByClass);
      } catch (error) {
        alert("Network error or CORS misconfiguration issue!");
        setError(error);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [spellClass]);
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
            throw new Error("Error while retriving the data!");
          }
          const data = await response.json();
          setData(data as ISpellDetails);
        } catch (error) {
          alert("Network error or CORS misconfiguration issue!");
          setError(error);
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [spellIndex]);
  return [data, isLoading, error];
};
