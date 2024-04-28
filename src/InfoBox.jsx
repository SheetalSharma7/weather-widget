
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info}){
const INIT_URL="https://images.unsplash.com/photo-1681056164963-8ee1b4e6b28b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVsaGklMjB3ZWF0aGVyfGVufDB8fDB8fHww"
 const COLD_URL="https://cdn.pixabay.com/photo/2017/08/06/19/05/snow-2595281_640.jpg";
 const HOT_URL="https://williamsonsource.com/wp-content/uploads/2022/05/a-field-on-which-grows-one-beautiful-tall-oak-tree-2021-09-04-06-50-23-utc.jpg";
 const RAINY_URL="https://media.istockphoto.com/id/140453995/photo/road-with-cars-in-stormy-weather-people-running.webp?b=1&s=170667a&w=0&k=20&c=1MjXmhOraLUEqIpkoUC5wpwDAj-Wqy-3PUmb3FszuE4=";
      



    return(
        <div className="InfoBox">
            {/* <h2>Weather Info-{info.weather}</h2> */}

            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity >80
          ?RAINY_URL
          :info.temp > 15
          ?HOT_URL
          :COLD_URL
        } 
       
        title="green iguana"
      />
      
      

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} &nbsp;{
            info.humidity >80
            ?<ThunderstormIcon/>
            :info.temp > 15
            ?<WbSunnyIcon/>
            :<AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>temperature={info.temp}&deg;C</p>
          <p>humidity={info.humidity}</p>
          {/* <p>feelsLike={info.feelsLike}</p> */}
          <p>tempMin={info.tempMin}&deg;C</p>
          <p>tempMax={info.tempMax}&deg;C</p>
          The weather can be describe as <b>{info.weather}</b>  and feels like {info.feelsLike}&deg;C
          
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>

        </div>
    );
}