import ApiConfig from '../../Api/ApiConfig';
import useFetch from '../../Api/useFetch';
import CardItem from '../CardItem';

const ShowsList = (props) => {
  const { data, loading, error } = useFetch('/tv/top_rated');
  const { tmdb_w500Image } = ApiConfig;

  return (
    <div className={`text-white ${props.className} ${props.topComp ? 'bg-gradient-to-b from-black via-black to-zinc-900' : 'bg-zinc-900'}`}>
      <div className="container mx-auto">
        <h2 className="font-semibold text-lg mb-3">TV Shows</h2>
        <div className={`${props.slides ? 'carousel rounded-box' : 'grid grid-cols-6 gap-y-10'}`}>
          {error && console.log(error.message)}
          {loading && (
            <div>
              <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
            </div>
          )}
          {data &&
            data?.data.results
              .slice(0, 12)
              .map((index) => (
                <CardItem key={index.id} title={index.name} year={new Date(index.first_air_date).getFullYear()} className={`${props.slides ? 'carousel-item px-5' : ''} w-48`} thumbn={`${tmdb_w500Image(index.poster_path)}`} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default ShowsList;
