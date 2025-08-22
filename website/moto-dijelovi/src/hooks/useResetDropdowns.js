import { useEffect } from "react";

export default function useResetDropdowns({
  searchMotocikl,
  searchMarka,
  searchKubikaza,
  searchModel,
  setSearchMarka,
  setSearchKubikaza,
  setSearchModel,
  setSearchGodinaIzgradnje,
}) {
  useEffect(() => {
    if (searchMotocikl === "Sve") {
      setSearchMarka("Sve");
      setSearchKubikaza("Sve");
      setSearchModel("Sve");
      setSearchGodinaIzgradnje("Sve");
    }
  }, [searchMotocikl]);

  useEffect(() => {
    if (searchMarka === "Sve") {
      setSearchKubikaza("Sve");
      setSearchModel("Sve");
      setSearchGodinaIzgradnje("Sve");
    }
  }, [searchMarka]);

  useEffect(() => {
    if (searchKubikaza === "Sve") {
      setSearchModel("Sve");
      setSearchGodinaIzgradnje("Sve");
    }
  }, [searchKubikaza]);

  useEffect(() => {
    if (searchModel === "Sve") {
      setSearchGodinaIzgradnje("Sve");
    }
  }, [searchModel]);
}
