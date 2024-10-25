import { FadeTextDemo } from "./MagicUI/FadeTextComponent";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] gap-5">
      <FadeTextDemo />
      <a href="mailto:kiyotomm99@gmail.com">
        <button className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
          kiyotomm99@gmail.com
        </button>
      </a>
      <div>or copy</div>
      kiyotomm99@gmail.com
    </div>
  );
};

export default ContactPage;
