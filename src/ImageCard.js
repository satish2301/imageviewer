import React, {useState} from 'react'
const ImageCard = () => {

    const imgs = [
        {
            id: 0,
            values: "https://picsum.photos/id/237/200/300"
        },
        {
            id: 1,
            values: "https://picsum.photos/id/238/200/300"
        },
        {
            id: 2,
            values: "https://picsum.photos/id/239/200/300"
        },
        {
            id: 3,
            values: "https://picsum.photos/id/230/200/300"
        }, {
            id: 4,
            values: "https://picsum.photos/id/239/200/300"
        }, {
            id: 5,
            values: "https://picsum.photos/id/267/200/300"
        }, {
            id: 6,
            values: "https://picsum.photos/id/265/200/300"
        }, {
            id: 7,
            values: "https://picsum.photos/id/260/200/300"
        }, {
            id: 8,
            values: "https://picsum.photos/id/263/200/300"
        },

    ]
    const colors=[
      {id:0,values:"pink"},
      {id:1,values:"gray"},
      {id:2,values:"skyblue"},
    ]
    const [path, setPath] = useState(imgs[0]);
    const handleClick = (id) => {
        const slider = imgs[id];
        setPath(slider);
        setCount(id)
    }
    const[bgcolor,setBgcolor]=useState(colors[0].values);
    const colorChanger=(id)=>{
      const colorid=colors[id];
      setBgcolor(colorid.values);
     
    }
    const[count,setCount]=useState(0);
    return (
        <>
          <div className='App' style={{backgroundColor:bgcolor}}>
            <div className='container'>
                <img src={
                        path.values
                    }
                    alt=''
                    width="100%"
                    height="100%"/>
            </div>

            <div className='image-container'>
                <div className='image-filter-section'>
                <h3 style={{color:'red'}}>{`file no :${count}/${imgs.length}`}</h3>
                    <select className='select-1'>
                        <option>Do not filter</option>
                    </select>
                    <select className='select-2'>
                        <option>ALL</option>
                    </select>
                    <div className='color-item'>
                     {
                      colors.map((item,id)=>
                      <li key={item.id} style={{backgroundColor:item.values}} onClick={()=>{colorChanger(id)}}></li>
                      )
                     }
                    </div>
                </div>

                <div className='main-card'>
                    {
                    imgs.map((item, id) => (
                        <div className='card' >
                            <img src={
                                    item.values
                                }
                                onClick={
                                    () => {
                                        handleClick(id)
                                    }
                                }
                                alt=''
                                width="100%"
                                height="100%"/>
                        </div>
                    ))
                } </div>
            </div>
            </div>
        </>
    )
}

export default ImageCard
