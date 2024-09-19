"use client"

import {redirect, useRouter} from "next/navigation";

export default function AdminButton({text, url} : {text: string, url: string}) {
  const router = useRouter();
  return (
    <>
      <button className="bg-black rounded-full w-48 h-12 text-white text-2xl" onClick={() => router.push(url)}>
        {text}
      </button>
    </>
  )
}
