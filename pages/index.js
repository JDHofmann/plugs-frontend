import Link from 'next/link';
import { useEffect, useState } from 'react';
import Layout from "../components/Layout";
import withContext from "../withContext";


function Home({context}) {

  const [current, setCurrent] = useState(0);

  const links = [
    { name: "laptops",
      url: "https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg"
    },
    { name: "phones",
      url: "https://brain-images-ssl.cdn.dixons.com/3/8/10215583/u_10215583.jpg"
    },
    { name: "tablets",
      url: "https://economictimes.indiatimes.com/thumb/msid-76216026,width-1200,height-900,resizemode-4,imgsize-235016/surface-pro-7-does-everything-that-a-tablet-should-do-and-doubles-up-as-a-really-efficient-laptop-.jpg?from=mdr"
    },
    {
      name: "smart watches",
      url: "https://the-gadgeteer.com/wp-content/uploads/2020/03/wyze-health-3.jpg"
    },
    {
      name: "tvs",
      url: "https://cdn.benzinga.com/files/imagecache/1024x768xUP/images/story/2012/shutterstock_110696096.jpg"
    }
  ]

  const renderLinks = () => {
    return links.map( l => (
      <div className={ current === links.indexOf(l) ? "link in-view": "link"}>
        <img
          alt=""
          className="link-img"
          src={l.url}
        />
        <Link href={"/category/" + l.name} >
          <a className="category-link" >Shop {l.name}</a>
        </Link>
      </div>
    ))
  }

  useEffect( () => {
    let next;
    current === links.length - 1 ? next = 0 : next = (current + 1);
    const id = setTimeout(() => setCurrent(next), 7000);
    return () => clearTimeout(id);
  }, [current]);

  return (
    <Layout>
      <div>
        <div className="scrolling-links-container">
          {renderLinks()}
        </div>
        <div className="mission">
            <p>Find the electronics you deserve</p>
        </div>
      </div>
    </Layout>
  )
}

export default withContext(Home);