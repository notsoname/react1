import Cards from '../../components/cards';
import SearchPannel from '../../components/searchPannel';

export interface Idata {
  title: string;
  img: string;
  overview: string;
}

const HomePage = () => {
  const data: Idata[] = [
    {
      img: '/wPU78OPN4BYEgWYdXyg0phMee64.jpg',
      overview:
        'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
      title: 'The Shawshank Redemption',
    },
    {
      img: '/90ez6ArvpO8bvpyIngBuwXOqJm5.jpg',
      overview:
        'Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.',
      title: 'Dilwale Dulhania Le Jayenge',
    },
    {
      img: '/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg',
      overview:
        'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
      title: 'The Godfather',
    },
    {
      img: '/lp6SmwyNRspEYkkLXFEVuNlCw77.jpg',
      overview:
        'As the world moves on from the war and technological advances bring changes to her life, Violet still hopes to see her lost commanding officer again.',
      title: 'Violet Evergarden: The Movie',
    },
    {
      img: '/v5CEt88iDsuoMaW1Q5Msu9UZdEt.jpg',
      overview:
        "A tragic accident lead to Kaori's blindness, but she clings to life and the smaller pleasures it can still afford her. She meets Rui and begins to talk to him. Rui was once a promising kickboxer, but something happened in his past. Kaori's smile brings out a change in Rui. However, the two are connected in more than one way. Rui attempts to do what is right.",
      title: 'Your Eyes Tell',
    },
    {
      img: '/loRmRzQXZeqG78TqZuyvSlEQfZb.jpg',
      overview:
        'The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.',
      title: "Schindler's List",
    },
    {
      img: '/3RMLbSEXOn1CzLoNT7xFeLfdxhq.jpg',
      overview:
        'Rihito Sajo, an honor student with a perfect score on the entrance exam and Hikaru Kusakabe, in a band and popular among girls, would have never crossed paths. Until one day they started talking at the practice for their school’s upcoming chorus festival. After school, the two meet regularly, as Hikaru helps Rihito to improve his singing skills. While they listen to each other’s voice and harmonize, their hearts start to beat together.',
      title: 'Dou kyu sei – Classmates',
    },
    {
      img: '/jtAI6OJIWLWiRItNSZoWjrsUtmi.jpg',
      overview:
        "Professor Gabriel Emerson finally learns the truth about Julia Mitchell's identity, but his realization comes a moment too late. Julia is done waiting for the well-respected Dante specialist to remember her and wants nothing more to do with him. Can Gabriel win back her heart before she finds love in another's arms?",
      title: "Gabriel's Inferno Part II",
    },
    {
      img: '/poec6RqOKY9iSiIUmfyfPfiLtvB.jpg',
      overview:
        'In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.',
      title: 'The Godfather: Part II',
    },
  ];

  return (
    <>
      <SearchPannel />
      <div className="d-flex justify-content-center flex-wrap pt-4 gap-3">
        {data.map((card) => (
          <Cards key={card.img} title={card.title} img={card.img} overview={card.overview} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
