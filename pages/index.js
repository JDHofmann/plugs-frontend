import CategoryContainer from "../components/CategoryContainer"
import Layout from "../components/Layout";
import withContext from "../withContext";

function Home({context}) {

  const scrollLinks = ( i=0 ) => {
    let links = document.querySelectorAll(".link")
    links.forEach( lx => lx.classList.remove("in-view"))
    if(i === links.length ) i = 0;
    links[i].classList.add("in-view")
    i+=1;
    setTimeout(() => scrollLinks(i), 7000)
}
  return (
    <Layout>
      <div>
        <div className="scrolling-links-container">
              <div className="link in-view">
                  <div id="a" className="link-background"></div>
                  <p>Shop Laptops</p>
              </div>
              <div className="link">
                  <div id="b" className="link-background"></div>
                  <p>Shop Smartphones</p>
              </div>
              <div className="link">
                  <div id="c" className="link-background"></div>
                  <p>Shop Tablets</p>
              </div>
        </div>
        <div className="mission">
            <p>Find the electronics you deserve</p>
        </div>
      </div>
    </Layout>
  )
}

export default withContext(Home);