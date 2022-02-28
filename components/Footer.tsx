import { date } from "../components/time.tsx";

const navigation = [
  {
    name: "Ongun Demirag",
    href: "https://www.ongundemirag.com",
  },
  { name: "E-mail", href: "mailto:ongun.demirag@gmail.com" },
  { name: "Linkedin ", href: "https://www.linkedin.com/in/ongun-demirag/" },
];
const copyright_text =
  "© " + date() + " Made by Ongun Demirag, All rights reserved.";
export default function Footer() {
  return (
    <footer className="bg-secondary dark:bg-dark-100 dark:text-primary">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center">
          {navigation.map((item, i) => (
            <div key={i} className="px-6 py-2 ">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:tex-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-8 text-center ">{copyright_text}</p>
      </div>
    </footer>
  );
}
