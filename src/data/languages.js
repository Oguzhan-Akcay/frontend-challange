import Movie from '../assests/Movie.jpg';
import WatchList from '../assests/WatchList.jpg';
import FrChSS from '../assests/FrChSS.png';

export const languages = {
  en: {
    title: "Creative thinker, Minimalism lover",
    description:
      " Hi, I’m Oguzhan. I’m a full-stack Java developer. If you are looking for a Developer who to craft solid and scalable frontend products withgreat user experiences. Let’s shake hands with me.",
    profile: "Profile",
    project: "Projects",
    skill: "Skills",
    aboutSection: {
      section: "About Me",
      name: "Oğuzhan Akçay",
      bdaytitle: "Birthday",
      bday: "25.06.1998",
      cityTitle: "City",
      city: "Antalya",
      educationTitle: "Education",
      education: {
        uni: "Antalya Bilim Uni. Electrical Electornics Engineering",
        type: "Bachelor's degree",
        year: "2022",
      },
      role: "Full-Stack Java Developer",
      roleTitle: "Preferred Role",
      aboutMe: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
        "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!"
      ]
    },
    footerSection: {
      main: "Let’s work together on your next product.",
    },

    headerData: {
      logoText: "O.A",
      navigationLinks: ["Skills", "Projects", "Hire Me"]
    },
    projectsData: [
      {
        id: 1,
        title: "Movie",
        imageUrl: Movie,
        description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        technologies: ["React", "Redux", "Axios"],
        githubLink: "https://github.com/Oguzhan-Akcay/fsweb-s10g2-redux-filmler-solution",
        viewSiteLink: "https://fsweb-s10g2-redux-filmler-solution-two.vercel.app/movies"
      },
      {
        id: 2,
        title: "WatchList",
        imageUrl: WatchList,
        description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        technologies: ["React", "Redux", "Axios"],
        githubLink: "https://github.com/Oguzhan-Akcay/fsweb-s10g3-redux-watchlist-solution",
        viewSiteLink: "https://fsweb-s10g3-redux-watchlist-solution-seven.vercel.app/"
      },
      {
        id: 3,
        title: "Portfolio",
        imageUrl: FrChSS,
        description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        technologies: ["React", "Redux", "Axios"],
        githubLink: "https://github.com/Oguzhan-Akcay/frontend-challange",
        viewSiteLink: "https://frontend-challange-two.vercel.app/"
      }
    ],
    skillsData: [
      {
        title: "JavaScript",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        title: "React.Js",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        title: "Java",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    ],
    footerData: [
      {
        email: "👉oguzhanakcay90@gmail.com",
        personalBlogLink: "#",
        githubLink: "https://github.com/Oguzhan-Akcay",
        linkedinLink: "https://www.linkedin.com/in/oguzhankcay/"
      }
    ],
  },
  tr: {
    title: "Yaratıcı düşünür, Minimalist sever",
    description:
      "Merhaba, ben Oguzhan. Full-Stack Java geliştiriciyim. Harika kullanıcı deneyimleri ile sağlam ve ölçeklenebilir ön uç ürünleri oluşturacak bir geliştirici arıyorsanız. Benimle iletişime geçebilirsiniz.",
    profile: "Profil",
    skill: "Yetenekler",
    project: "Projeler",
    aboutSection: {
      section: "Hakkımda",
      name: "Oğuzhan Akçay",
      bdaytitle: "Birthday",
      bday: "25.06.1998",
      cityTitle: "İkamet Şehri",
      city: "Antalya",
      educationTitle: "Eğitim Durumu",
      education: { uni: "Antalya Bilim Uni. Electrical Electornics Engineering", type: "Lisans", year: "2022" },
      role: "Full-Stack Java Geliştirici",
      roleTitle: "Tercih Ettiği Rol",
      aboutMe: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
        "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!"
      ]
    },
    footerSection: {
      main: "Bir sonraki ürününüz üzerinde birlikte çalışalım.",
    },
    headerData: {
      logoText: "O.A",
      navigationLinks: ["Yetenekler", "Projeler", "Bana ulaş"]
    },
    projectsData: [
      {
        id: 1,
        title: "Film",
        imageUrl: Movie,
        description: "Kullanıcılarınızın hangi çerezleri kabul edeceğini veya reddedeceğini seçmesine olanak tanıyan basit, özelleştirilebilir, minimum kurulum çerez eklentisi. Bu, Vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve bir NPM paketi olarak mevcuttur ve git deposu her türlü özelleştirmeyi yapar kodlama ve temalar mümkün.",
        technologies: ["React", "Redux", "Axios"],
        githubLink: "https://github.com/Oguzhan-Akcay/fsweb-s10g2-redux-filmler-solution",
        viewSiteLink: "https://fsweb-s10g2-redux-filmler-solution-two.vercel.app/movies"
      },
      {
        id: 2,
        title: "FilmListesi",
        imageUrl: WatchList,
        description: "Kullanıcılarınızın hangi çerezleri kabul edeceğini veya reddedeceğini seçmesine olanak tanıyan basit, özelleştirilebilir, minimum kurulum çerez eklentisi. Bu, Vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve bir NPM paketi olarak mevcuttur ve git deposu her türlü özelleştirmeyi yapar kodlama ve temalar mümkün.",
        technologies: ["React", "Redux", "Axios"],
        githubLink: "https://github.com/Oguzhan-Akcay/fsweb-s10g3-redux-watchlist-solution",
        viewSiteLink: "https://fsweb-s10g3-redux-watchlist-solution-seven.vercel.app/"
      },
      {
        id: 3,
        title: "Portföy",
        imageUrl: FrChSS,
        description: "Kullanıcılarınızın hangi çerezleri kabul edeceğini veya reddedeceğini seçmesine olanak tanıyan basit, özelleştirilebilir, minimum kurulum çerez eklentisi. Bu, Vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve bir NPM paketi olarak mevcuttur ve git deposu her türlü özelleştirmeyi yapar kodlama ve temalar mümkün.",
        technologies: ["React", "Redux", "Axios"],
        githubLink: "https://github.com/Oguzhan-Akcay/frontend-challange",
        viewSiteLink: "https://frontend-challange-two.vercel.app/"
      }
    ],
    skillsData: [
      {
        title: "JavaScript",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        title: "React.Js",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        title: "Java",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    ],
    footerData: [
      {
        email: "👉oguzhanakcay90@gmail.com",
        personalBlogLink: "#",
        githubLink: "https://github.com/Oguzhan-Akcay",
        linkedinLink: "https://www.linkedin.com/in/oguzhankcay/"
      }
    ],
  },
};
