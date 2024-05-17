import React from 'react';
import TopPickCard from '../topPickCard';

const topPicks = [
  {
    image: 'https://www.sharespace.work/cdn-cgi/image/format=auto,fit=scale-down,width=1920/files/Venues/photo/994/61854928c31b9.jpg',
    title: 'TOG Green Park House',
    location: 'Green Park Underground Station',
  },
  {
    image: 'https://theboutiqueworkplace.co/custom/uploads/2016/09/36-Soho-Sq-3-of-4-min.png',
    title: 'Boutique Workplaces St Thomas Street',
    location: 'Dubai Bridge Underground Station',
  },
  {
    image: 'https://picture.liquidspace.com/Index?emptyImageUrl=https%3a%2f%2fliquidspace.com%2fContent%2fImages%2fliquid-holder.jpg&etag=9w%2fM5rphts11skQVng0pjQ%3d%3d&aux=UUTjLSWK47G%2bxUUCZsBT9AfZSMaMGH0eqURV0g2V2j9R199H6Eq%2bG4jKpWWD3ctrOYfrbdFSFbU4AnBOgrKJ5g%3d%3d',
    title: 'Landmark Tottenham Court Road',
    location: 'Landmark Tottenham Court Road',
  },
];

const TopPicksList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {topPicks.map((pick, index) => (
        <TopPickCard
          key={index}
          image={pick.image}
          title={pick.title}
          location={pick.location}
        />
      ))}
    </div>
  );
};

export default TopPicksList;