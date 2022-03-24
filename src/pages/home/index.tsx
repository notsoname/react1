import Cards from '../../components/cards';
import SearchPannel from '../../components/searchPannel';

export interface Idata {
  name: string;
  img: string;
  text: string;
}

const HomePage = () => {
  const data: Idata[] = [
    {
      img: '/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg',
      text: 'From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.',
      name: 'Suicide Squad',
    },
    {
      img: '/lFSSLTlFozwpaGlO31OoUeirBgQ.jpg',
      text: 'The most dangerous former operative of the CIA is drawn out of hiding to uncover hidden truths about his past.',
      name: 'Jason Bourne',
    },
    {
      img: '/hU0E130tsGdsYa4K9lc3Xrn5Wyt.jpg',
      text: 'One year after outwitting the FBI and winning the public’s adulation with their mind-bending spectacles, the Four Horsemen resurface only to find themselves face to face with a new enemy who enlists them to pull off their most dangerous heist yet.',
      name: 'Now You See Me 2',
    },
    {
      img: '/h28t2JNNGrZx0fIuAw8aHQFhIxR.jpg',
      text: 'A recently cheated on married woman falls for a younger man who has moved in next door, but their torrid affair soon takes a dangerous turn.',
      name: 'The Boy Next Door',
    },
    {
      img: '/vOipe2myi26UDwP978hsYOrnUWC.jpg',
      text: 'An orphan boy is raised in the Jungle with the help of a pack of wolves, a bear and a black panther.',
      name: 'The Jungle Book',
    },
    {
      img: '/tgfRDJs5PFW20Aoh1orEzuxW8cN.jpg',
      text: 'Arthur Bishop thought he had put his murderous past behind him when his most formidable foe kidnaps the love of his life. Now he is forced to travel the globe to complete three impossible assassinations, and do what he does best, make them look like accidents.',
      name: 'Mechanic: Resurrection',
    },
  ];

  return (
    <>
      <SearchPannel />
      <div className="d-flex justify-content-center flex-wrap pt-4">
        {data.map((card) => (
          <Cards key={card.img} name={card.name} img={card.img} text={card.text} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
