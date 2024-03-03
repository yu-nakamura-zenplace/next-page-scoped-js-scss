"use client"
import { useEffect } from "react";

export default function ScriptCode({ func }: { func: () => void; }) {
  useEffect(() => {
    func();
  }, []);
  return <></>
}