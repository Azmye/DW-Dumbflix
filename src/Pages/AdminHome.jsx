import ShowsList from '../Components/Shows/ShowsList';

const HomeAdmin = () => {
  return (
    <React.Fragment>
      <div className="flex">
        <div className="flex">
          <h2>List Film</h2>
          <select>
            <option value="default">Category</option>
            <option value="film">Film</option>
            <option value="shows">TV Shows</option>
          </select>
        </div>

        <button>Add Film</button>
      </div>

      <ShowsList linkTo={'/shows-details/'} topComp={false} className={'pb-5'} />
    </React.Fragment>
  );
};

export default HomeAdmin;
