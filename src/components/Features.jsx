import React from "react";
import Feature from "./Feature";

const lore =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet vehicula dignissim. Suspendisse in iaculis mi. Donec elit mi, scelerisque quis tempus ut, facilisis id tellus. Aenean ut risus eu lorem ornare interdum eget ut eros. Praesent lacinia convallis vestibulum. Morbi diam orci, sollicitudin sit amet sodales vitae, egestas quis nibh. Proin pharetra vulputate imperdiet. Ut quis convallis arcu, eget.";

const features = [
  {
    name: "Search your favorite cards!",
    description: ["Discover the Perfect Card for You!", <br/>, "Unleash your curiosity and embark on a journey through a vast collection of captivating cards. Whether you're seeking the electrifying power of lightning or the mystique of ancient spells, our mobile application brings your favorite cards to life at your fingertips. Search by name and witness a world of possibilities unfold. From legendary creatures to powerful artifacts, our extensive database ensures that every card you desire is just a search away."],
    image: "https://cdn.discordapp.com/attachments/732360655658680452/1126191772222099456/feature1.png",
  },
  {
    name: "Look for a specific card!",
    description: ["Uncover the Hidden Gems!", <br/>, "Delve into the realm of unlimited possibilities as you embark on a quest to find your dream card. Our mobile application empowers you to search for specific cards and unlock a treasure trove of sales and auctions at your disposal. Whether it's a rare collectible or a sought-after edition, our extensive database brings you closer to your most coveted cards. Experience the thrill of discovery through a world of enchanting options, all within the grasp of your fingertips."],
    image: "https://cdn.discordapp.com/attachments/732360655658680452/1126195118785974383/feature2.png",
  },
  {
    name: "Manage your profile!",
    description: ["Take Control of Your Journey!", <br/>, "Empower yourself with the ability to manage your own destiny. Our mobile application offers you complete control over your sales, auctions, and bids. Take charge of your profile and unleash your potential as a true master of the game. Seamlessly organize your cards, monitor your auctions, and oversee your bids from one centralized hub. Elevate your trading experience as you strategize, negotiate, and conquer the market with confidence."],
    image: "https://cdn.discordapp.com/attachments/732360655658680452/1126195119368962078/feature3.png",
  },
];

const Features = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-8">
      <h2 className="text-5xl text-slate-100 font-bold" id="features">
        Features
      </h2>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 p-10 px-16">
        {features.map((feature, index) => (
          <Feature
            key={index}
            name={feature.name}
            description={feature.description}
            image={feature.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
