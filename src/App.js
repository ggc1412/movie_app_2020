import React from "react";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
  }
];

// 원래 porbs가 들어가는 자리
// ({name, img}) // porb.name, prob.img
// img 태그의 alt를 넣으라는 것은 create-react-app에서 제시하는 코딩스타일
// 시각 장애인을 위한 태그이다.
function Food({name, img}){
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={img} alt={name}/>
    </div>  
  );
}

function App() {
  return (
    <div>
      {foodILike.map(dish=><Food key={dish.id} name={dish.name} img={dish.image} />)}      
    </div>
  );
}

export default App;
