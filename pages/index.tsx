import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex h-screen w-full items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <p>
            This is a Next.JS Template created by{" "}
            <a href="https://github.com/muhammadarifftaha">muhammadarifftaha</a>
          </p>
          <p>
            Start editing at{" "}
            <span className="rounded border px-3 py-2 font-mono">
              /pages/index.tsx
            </span>
          </p>
          <div className="text-start">
            <p>This template includes the following packages :</p>
            <ul className="list-disc">
              <li>
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-sky-400"
                >
                  TailwindCSS
                </a>
              </li>
              <ul className="ml-2 list-disc">
                <li>Preconfigured</li>
                <li>
                  Plugins included :
                  <ul className="ml-4 list-disc">
                    <li>@tailwindcss/forms</li>
                    <li>@tailwindcss/typography</li>
                    <li>prettier-plugin-tailwindcss</li>
                  </ul>
                </li>
              </ul>
              <li>
                <a
                  href="https://headlessui.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-sky-400"
                >
                  HeadlessUI
                </a>
              </li>
              <li>
                <a
                  href="https://fontawesome.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-sky-400"
                >
                  Font Awesome
                </a>

                <ul className="ml-2 list-disc">
                  <li>Brands Icons</li>
                  <li>Regular Icons</li>
                  <li>Solid Icons</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
