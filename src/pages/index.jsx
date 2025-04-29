import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

const Silvestr = () => {
  return (
  <div className="plushy">
  <img className="plushy__image" src="https://kodim.cz/cms/assets/czechitas/js2/lekce/sablony-komponenty/cv-komponenty/plysaci/elephant.jpg" />
  <h2 className="plushy__name">Silvestr</h2>
  <p className="plushy__text">Silvestr rád pozoruje dění za oknem a upřímně se usmívá na všechno kolemjdoucí.</p>
</div>
  )};

  const Ctirad = () => {
    return (
    <div className="plushy">
    <img className="plushy__image" src="https://kodim.cz/cms/assets/czechitas/js2/lekce/sablony-komponenty/cv-komponenty/plysaci/mouse.jpg" />
    <h2 className="plushy__name">Ctirad</h2>
    <p className="plushy__text">Ctirad tráví svůj čas v blízkosti lednice a s očekáváním pozoruje její bílé dveře.</p>
  </div>
    )};

document.querySelector('#root').innerHTML = render(
<>
<h1>Plyšáci</h1>
<div className="plushies">
<Silvestr/>
<Ctirad/></div>
</>
);
