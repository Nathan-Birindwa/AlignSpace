import { router } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace("/map-screen");
    }, 100); // small delay ensures layout is mounted

    return () => clearTimeout(timeout);
  }, []);

  return null;
}
