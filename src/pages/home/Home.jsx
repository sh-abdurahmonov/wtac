import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import IntroImg1 from "../../assets/intro-img1.png";
import IntroImg2 from "../../assets/intro-img2.png";
import IntroImg3 from "../../assets/intro-img3.png";
import IntroImg4 from "../../assets/intro-img4.png";
import Icon from "../../assets/pushpin.svg";
import AboutImg from "../../assets/about-img.png";
import CooperationImg from "../../assets/cooperation-img.png";
import TalkoLogo from "../../assets/talko-logo.svg";
import PandaLogo from "../../assets/panda-c-logo.svg";
import TantanaLogo from "../../assets/tantana-logo.svg";
import RtpLogo from "../../assets/rtp-logo.svg";
import SanegLogo from "../../assets/saneg-logo.svg";
import ManWithHelmetImg from "../../assets/man-with-helmet-img.png";
import KabeltechLogo from "../../assets/kabeltech-logo.svg";
import NgmkLogo from "../../assets/ngmk-logo.svg";
import UtyLogo from "../../assets/uty-logo.svg"
import CeLogo from '../../assets/cengiz-energy-logo.svg'
const Home = () => {
  return (
    <>
      <section className="relative">
        <div className="w-full max-w-[1100px] mx-auto flex justify-between items-center py-44">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl text-customBlue font-extrabold mb-6">
              World Trade and Consult LLC
            </h2>
            <p className="text-customGray text-xl w-full max-w-[600px] mb-12">
              Торговая компания, основанная в 2023 году и специализирующаяся на
              оптовой торговле смазочными маслами, нефтепродуктами, текстильной
              продукцией, цветными металлами, кабельно-проводниковой продукцией,
              продуктами из пластмасса и упаковочными материалами.
            </p>
            <Link className="bg-customLightBlue text-white text-xl py-4 px-7 rounded-md w-full max-w-56">
              Связаться с нами
            </Link>
          </div>
          <div className="parent absolute right-[10%] -top-[15%] -z-50">
            <img
              src={IntroImg1}
              alt=""
              className="w-72 h-72 rotate-45 top-20 relative  rounded-3xl  object-cover div1 -z-50"
            />
            <img
              src={IntroImg2}
              alt=""
              className="w-72 h-72 rotate-45 left-20 relative  rounded-3xl object-cover div2"
            />
            <img
              src={IntroImg3}
              alt=""
              className="w-72 h-72 rotate-45 relative left-40 -top-20  rounded-3xl object-cover z-50 div3"
            />
            <img
              src={IntroImg4}
              alt=""
              className="w-72 h-72 rotate-45  relative -top-20 rounded-3xl object-cover div4 z-10"
            />
          </div>
        </div>
      </section>
      <section className="bg-customSkyBlue">
        <div className="w-full max-w-[1100px] mx-auto pt-24 pb-12">
          <h2 className="text-4xl text-customBlue font-extrabold mb-6">
            О нас
          </h2>
          <div className="flex justify-between">
            <div className="flex flex-col justify-center">
              <p className="text-customGray text-xl w-full max-w-[555px] mb-6">
                Мы стремимся к лидерству, предлагая высококачественную продукцию
                и надежные, инновационные решения для поддержки устойчивого
                роста наших клиентов
              </p>
              <p className="text-customGray text-xl w-full max-w-[555px] mb-3">
                Наши товары пользуются высоким спросом как на внутреннем, так и
                на внешнем рынке. Мы экспортируем в Казахстан, Кыргызстан,
                Таджикистан и Италию.
              </p>
              <p className="text-customGray text-xl w-full max-w-[555px]">
                Мы стремимся предлагать индивидуальные решения по экспорту,
                гарантируя, что мы можем удовлетворить ваши конкретные
                требования на взаимовыгодных условиях. Производственный процесс
                проходит строгий контроль качества в полном соответствии с
                требованиями ГОСТ.
              </p>
            </div>
            <article className="py-3 px-5 rounded-xl bg-white relative">
              <img src={Icon} alt="" className="absolute -right-6 -top-3" />
              <h3 className="text-customBlue text-2xl font-semibold mb-6">
                Наша миссия
              </h3>
              <p className="text-customGray text-xl w-full max-w-[420px] mb-8">
                С момента нашего основания в 2023 году мы установили себя как
                значимый игрок в своей отрасли благодаря высокому качеству
                продукции и надежности поставок.
              </p>
              <p className="text-customGray text-xl w-full max-w-[420px]">
                Стремясь к постоянному росту, мы активно стремимся расширить
                ассортимент нашей продукции и укрепить партнерские отношения как
                с потенциальными, так и с текущими клиентами.
              </p>
            </article>
          </div>
        </div>
        <img src={AboutImg} className="w-full object-cover" alt="" />
      </section>
      <section className="relative">
        <img
          src={CooperationImg}
          alt=""
          className="w-80 h-80 rotate-45 rounded-3xl  object-cover absolute -z-50 right-20 top-44"
        />
        <div className="w-full text-[#2D4972] max-w-[1100px] mx-auto pt-24 pb-7">
          <h2 className="text-customBlue text-[40px] w-full max-w-[730px] leading-[50px] font-black mb-5">
            Мы гордимся сотрудничеством с ведущими компаниями
          </h2>
          <p className="text-customGray text-xl w-full max-w-[770px] mb-10">
            Наши партнеры — это компании, с которыми мы делимся общими
            ценностями и вместе достигаем поставленных целей
          </p>
          <ul className="grid grid-cols-3 gap-8">
            <li className="p-2 rounded-xl shadow-md w-80 h-44 bg-white">
              <img src={TalkoLogo} alt="" className="w-24 h-24 mb-5" />
              <h3 className="text-base font-semibold">
                Талко Групп и СП «Апрелевка»
              </h3>
            </li>
            <li className="p-2 rounded-xl shadow-md w-80 h-44 bg-white">
              <img src={PandaLogo} alt="" className="w-24 h-24 mb-5" />
              <h3 className="text-base font-semibold">Panda collection</h3>
            </li>
            <li className="p-2 rounded-xl shadow-md w-80 h-44 bg-white">
              <img src={TantanaLogo} alt="" className="w-24 h-24 mb-5" />
              <h3 className="text-base font-semibold">Tantana Textile</h3>
            </li>
            <li className="p-2 rounded-xl shadow-md w-80 h-44 bg-white">
              <img src={RtpLogo} alt="" className="w-24 h-24 mb-5" />
              <h3 className="text-base font-semibold">
                ООО Riders Trading Pro
              </h3>
            </li>
            <li className="p-2 rounded-xl shadow-md w-80 h-44 bg-white">
              <img src={SanegLogo} alt="" className="w-24 h-24 mb-5" />
              <h3 className="text-base font-semibold">Saneg - SEG Motol</h3>
            </li>
            <li className="p-2 rounded-xl shadow-md w-80 h-44 bg-white">
              <img src={KabeltechLogo} alt="" className="w-24 h-24 mb-5" />
              <h3 className="text-base font-semibold">OOO Kabel Tech Energy</h3>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="w-full text-[#2D4972] max-w-[1100px] mx-auto pt-20 pb-12">
          <h2 className="text-customBlue text-[40px] w-full max-w-[730px] leading-[50px] font-black mb-5">
            Наш ассортимент продукции
          </h2>
          <p className="text-customGray text-xl w-full mb-12">
            Наш товар соответствуют международным стандартам качества и
            требованиям современных технологий, Так же у нас большой ассортимент
            продукции и вы легко найдете все что вам необходимо
          </p>
          <ul className="grid grid-cols-2 gap-x-0 gap-y-5">
            <li className="group relative p-8 w-[530px] h-80 rounded-2xl bg-no-repeat bg-cover bg-[url(./assets/lubricants-img.png)] overflow-hidden">
              {/* Затемняющий слой для фона */}
              <div className="absolute inset-0 bg-black opacity-30 rounded-2xl"></div>

              <span className="text-xl font-semibold text-white z-10 relative group-hover:text-2xl transition-all duration-700">
                Смазочные материалы
              </span>

              <Link
                to="/category"
                className="bg-white p-3 rounded-xl z-10 w-12 h-12 block relative top-44 -right-[90%] opacity-0 group-hover:opacity-100 duration-700"
              >
                <FaArrowRight className="text-2xl" />
              </Link>

              {/* Поднимающийся фон на hover */}
              <div className="absolute inset-0 bg-[#2D4972D9] opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-full group-hover:translate-y-0 rounded-2xl"></div>
            </li>

            <li className="group relative p-8 w-[530px] h-80 rounded-2xl bg-no-repeat bg-cover bg-[url(./assets/crude-oil-img.png)] overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-30 rounded-2xl"></div>
              <span className="text-xl font-semibold text-white z-10 relative group-hover:text-2xl transition-all duration-700">
                Нефтепродукты
              </span>
              <Link
                to="/category"
                className="bg-white p-3 rounded-xl z-10 w-12 h-12 block relative top-44 -right-[90%] opacity-0 group-hover:opacity-100 duration-700"
              >
                <FaArrowRight className="text-2xl" />
              </Link>
              <div className="absolute inset-0 bg-[#2D4972D9] opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-full group-hover:translate-y-0 rounded-2xl"></div>
            </li>
            <li className="group relative p-8 w-[530px] h-80 rounded-2xl bg-no-repeat bg-cover bg-[url(./assets/textile-img.png)] overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-30 rounded-2xl"></div>
              <span className="text-xl font-semibold text-white z-10 relative group-hover:text-2xl transition-all duration-700">
                Текстильная продукция
              </span>
              <Link
                to="/category"
                className="bg-white p-3 rounded-xl z-10 w-12 h-12 block relative top-44 -right-[90%] opacity-0 group-hover:opacity-100 duration-700"
              >
                <FaArrowRight className="text-2xl" />
              </Link>
              <div className="absolute inset-0 bg-[#2D4972D9] opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-full group-hover:translate-y-0 rounded-2xl"></div>
            </li>
            <li className="group relative p-8 w-[530px] h-80 rounded-2xl bg-no-repeat bg-cover bg-[url(./assets/packaging-img.png)] overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-30 rounded-2xl"></div>
              <span className="text-xl font-semibold text-white z-10 relative group-hover:text-2xl transition-all duration-700">
                Упаковочные материалы
              </span>
              <Link
                to="/category"
                className="bg-white p-3 rounded-xl z-10 w-12 h-12 block relative top-44 -right-[90%] opacity-0 group-hover:opacity-100 duration-700"
              >
                <FaArrowRight className="text-2xl" />
              </Link>
              <div className="absolute inset-0 bg-[#2D4972D9] opacity- group-hover:opacity-100 transition-all duration-700 translate-y-full group-hover:translate-y-0 rounded-2xl"></div>
            </li>
            <li className="group relative p-8 w-[530px] h-80 rounded-2xl bg-no-repeat bg-cover bg-[url(./assets/colored-metal-img.png)] overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-30 rounded-2xl"></div>
              <span className="text-xl font-semibold text-white z-10 relative group-hover:text-2xl transition-all duration-700">
                Цветные металлы
              </span>
              <Link
                to="/category"
                className="bg-white p-3 rounded-xl z-10 w-12 h-12 block relative top-44 -right-[90%] opacity-0 group-hover:opacity-100 duration-700"
              >
                <FaArrowRight className="text-2xl" />
              </Link>
              <div className="absolute inset-0 bg-[#2D4972D9] opacity- group-hover:opacity-100 transition-all duration-700 translate-y-full group-hover:translate-y-0 rounded-2xl"></div>
            </li>
            <li className="group relative p-8 w-[530px] h-80 rounded-2xl bg-no-repeat bg-cover bg-[url(./assets/electric-cables-img.png)] overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-30 rounded-2xl"></div>
              <span className="text-xl font-semibold text-white z-10 relative group-hover:text-2xl transition-all duration-700">
                Кабельно-проводниковая продукция
              </span>
              <Link
                to="/category"
                className="bg-white p-3 rounded-xl z-10 w-12 h-12 block relative top-44 -right-[90%] opacity-0 group-hover:opacity-100 duration-700"
              >
                <FaArrowRight className="text-2xl" />
              </Link>
              <div className="absolute inset-0 bg-[#2D4972D9] opacity- group-hover:opacity-100 transition-all duration-700 translate-y-full group-hover:translate-y-0 rounded-2xl"></div>
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-customSkyBlue">
        <div className="w-full text-[#2D4972] max-w-[1100px] mx-auto flex items-end">
          <div className="flex flex-col justify-center pb-8">
            <h2 className="text-customBlue text-[40px] w-full max-w-[640px] leading-[50px] font-black mb-5">
              Мы уделяем большой упор на качество нашего товара
            </h2>
            <p className="text-customGray text-xl w-full max-w-[805px] mb-12">
              World Trade and Consult LLC – это надежный партнер в сфере
              международной торговли, который стремится предоставлять только
              продукцию высочайшего качества. Наша компания гордится тем, что мы
              обеспечиваем строгий контроль качества на всех этапах поставок.{" "}
              <br />
              <br />
              Наши опытные специалисты тщательно проверяют каждый товар, чтобы
              гарантировать его соответствие самым высоким стандартам. Мы
              работаем с проверенными поставщиками и всегда стремимся к тому,
              чтобы наши клиенты получали только лучшее. С World Trade and
              Consult LLC вы можете быть уверены в надежности и качестве каждой
              сделки.
            </p>
            <Link className="bg-customLightBlue text-white text-xl py-4 px-7 rounded-md w-full max-w-56">
              Связаться с нами
            </Link>
          </div>
          <img src={ManWithHelmetImg} alt="" className="pt-8" />
        </div>
      </section>
      <section>
        <div className="w-full max-w-[1100px] mx-auto py-20">
          <h2 className="text-customBlue text-[40px] w-full mb-24 leading-[50px] font-black">
            Клиенты, которыми мы дорожим
          </h2>
          <ul className="grid grid-cols-3 gap-y-7">
            <li className="p-2 shadow-md rounded-xl w-full max-w-80">
              <img src={NgmkLogo} alt="" className="object-cover mb-2" />
              <span className="text-base text-[#3A475E] font-semibold">
                Навоинский горнометаллургический комбинат
              </span>
            </li>
            <li className="p-2 shadow-md rounded-xl w-full max-w-80">
              <img src={UtyLogo} alt="" className="object-cover mb-2" />
              <span className="text-base text-[#3A475E] font-semibold">
                Навоинский горнометаллургический комбинат
              </span>
            </li>
            <li className="p-2 shadow-md rounded-xl w-full max-w-80">
              <img src={CeLogo} alt="Логотип Навоинский горнометаллургический комбинат" className="object-cover mb-2" />
              <span className="text-base text-[#3A475E] font-semibold">
                Навоинский горнометаллургический комбинат
              </span>
            </li>
            <li className="p-2 shadow-md rounded-xl w-full max-w-80">
              <img src={NgmkLogo} alt="" className="object-cover mb-2" />
              <span className="text-base text-[#3A475E] font-semibold">
                Навоинский горнометаллургический комбинат
              </span>
            </li>
            <li className="p-2 shadow-md rounded-xl w-full max-w-80">
              <img src={NgmkLogo} alt="" className="object-cover mb-2" />
              <span className="text-base text-[#3A475E] font-semibold">
                Навоинский горнометаллургический комбинат
              </span>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="w-full max-w-[1100px] mx-auto">
          <h2>Отзывы, которым можно доверять</h2>
        </div>
      </section>
    </>
  );
};

export default Home;
