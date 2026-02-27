const gameLibrary = [
  {
    id: "a-dog-tale",
    title: "A Dog Tale",
    catalog: {
      subtitle: "Galactic Journey",
      description:
        "Suspendisse potenti. Donec luctus nisl at massa aliquet, non ultrices lectus consectetur.",
      image: "/static/games/a-dog-tale/library.jpg",
      url: "/games/a-dog-tale/",
      status: "Vertical Slice",
    },
    homepageFeature: {
      enabled: true,
      subtitle: "Galactic Journey",
      description:
        "Suspendisse potenti. Donec luctus nisl at massa aliquet, non ultrices lectus",
      background: "/static/home/banner.jpg",
      image: "/static/home/logo.webp",
    },
    projectPage: {
      subtitle: "One man risks all to rescue his best friend.",
      hero: {
        eyebrow: "",
        background: "/static/home/banner.jpg",
        description:
          "A sequel to the beloved Net Yaroze classic, follow Ira as he crosses both worlds and genres to rescue his beloved dog.",
        logo: {
          src: "/static/home/logo.webp",
          alt: "A Dog Tale logo",
        },
        ctas: [
          {
            label: "Learn More",
            href: "#media",
            classes: "bg-primary-600 text-white hover:bg-primary-500",
          },
          {
            label: "View Platforms",
            href: "#platforms",
            classes:
              "border border-slate-300/50 bg-slate-900/30 text-slate-100 hover:bg-slate-800/50",
          },
        ],
        stats: [
          {
            label: "Genre",
            value: "2D Platform, Mixed",
          },
          {
            label: "Release Date",
            value: "Autumn 2026",
          },
          {
            label: "Mode",
            value: "Single Player",
          },
          {
            label: "Status",
            value: "In Development",
            valueClass: "text-emerald-300",
          },
        ],
      },
      features: [
        {
          title: "Challenging 2D platforming",
          description:
            "Pursue the dognapper through twisting canyons filled with cacti, and past misty lakes where dreams become reality.",
        },
        {
          title: "Explore the Yaroze",
          description:
            "Step beyond the initial game into other worlds - who knows what experiences Ira will encounter.",
        },
        {
          title: "A treasure trove of unlockables",
          description:
            "Unlock concept art and soundtracks, exclusive interviews, and even original Net Yaroze demos.",
        },
      ],
      screenshots: {
        id: "screenshots",
        title: "Screenshots",
        subtitle:
          "Please note, that screenshots represent a current work-in-progress and are not necessarily indicative of the final product.",
        items: [
          {
            type: "image",
            src: "/static/games/a-dog-tale/library.jpg",
            alt: "A Dog Tale screenshot of the library interior",
          },
          {
            type: "image",
            src: "/static/home/banner.jpg",
            alt: "A Dog Tale atmospheric world screenshot placeholder",
          },
          {
            type: "text",
            text: "More screenshots to come soon.",
            wrapperClass: "md:col-span-2",
          },
        ],
      },
      media: {
        id: "media",
        title: "Trailers & Videos",
        subtitle: "See the latest related media.",
        embed: {
          url: "https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ?rel=0",
          title: "A Dog Tale trailer placeholder",
        },
        helper: "In-game footage may not represent final product.",
        slots: {
          title: "Media Slots",
          items: [
            "Announcement Trailer",
            "Gameplay Showcase",
            "Developer Diary",
          ],
        },
      },
      platforms: {
        id: "platforms",
        title: "Platforms",
        subtitle: "",
        items: [
          {
            id: "windows",
            description: "",
            stores: [
              {
                id: "steam",
                url: "#",
              },
              {
                id: "epic",
                url: "#",
              },
              {
                id: "itch",
                url: "#",
              },
            ],
            status: {
              label: "Available at launch",
              class: "bg-emerald-100 text-emerald-700",
            },
          },
          {
            id: "macos",
            description: "",
            stores: [
              {
                id: "steam",
                url: "#",
              },
              {
                id: "epic",
                url: "#",
              },
              {
                id: "itch",
                url: "#",
              },
              {
                id: "app_store",
                url: "#",
              },
            ],
            status: {
              label: "Available at launch",
              class: "bg-emerald-100 text-emerald-700",
            },
          },
          {
            id: "linux",
            description: "",
            stores: [
              {
                id: "steam",
                url: "#",
              },
              {
                id: "epic",
                url: "#",
              },
              {
                id: "itch",
                url: "#",
              },
            ],
            status: {
              label: "Available at launch",
              class: "bg-emerald-100 text-emerald-700",
            },
          },
          {
            id: "android",
            description: "",
            links: [
              {
                label: "Google Play",
                url: "#",
              },
            ],
            status: {
              label: "Delayed to Spring 2027",
              class: "bg-sky-100 text-sky-700",
            },
          },
          {
            id: "ios",
            description: "",
            links: [
              {
                label: "App Store",
                url: "#",
              },
            ],
            status: {
              label: "Delayed to Spring 2027",
              class: "bg-sky-100 text-sky-700",
            },
          },
          {
            id: "playstation",
            description: "",
            links: [
              {
                label: "PS4\u00ae",
                url: "#",
              },
              {
                label: "PS5\u00ae",
                url: "#",
              },
            ],
            status: {
              label: "Planned",
              class: "bg-slate-200 text-slate-700",
            },
          },
          {
            id: "xbox",
            description: "",
            links: [
              {
                label: "Xbox One\u00ae",
                url: "#",
              },
              {
                label: "Xbox Series X|S\u00ae",
                url: "#",
              },
            ],
            status: {
              label: "Planned",
              class: "bg-slate-200 text-slate-700",
            },
          },
          {
            id: "nintendo",
            description: "",
            links: [
              {
                label: "Nintendo Switch\u2122",
                url: "#",
              },
              {
                label: "Nintendo Switch 2\u2122",
                url: "#",
              },
            ],
            status: {
              label: "Planned",
              class: "bg-slate-200 text-slate-700",
            },
          },
        ],
      },
    },
  },
  {
    id: "project-nimbus",
    title: "Project Nimbus",
    catalog: {
      subtitle: "Skybound Adventure",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A short description placeholder.",
      image: "/static/petrobolos-silver.webp",
      url: "/games/#project-nimbus",
      status: "Pre-Production",
    },
    releasePlatforms: ["web"],
  },
  {
    id: "echoes-of-ember",
    title: "Echoes of Ember",
    catalog: {
      subtitle: "Mystic Realms",
      description:
        "Integer ac dui vitae augue egestas interdum. Placeholder copy for a game description.",
      image: "/static/petrobolos-silver.webp",
      url: "/games/#echoes-of-ember",
      status: "Concept & Prototyping",
    },
    releasePlatforms: ["windows", "macos", "android", "ios"],
  },
];

module.exports = gameLibrary;
