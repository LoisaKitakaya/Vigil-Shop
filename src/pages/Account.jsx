import { Link, useNavigate } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

const Account = () => {
  let navigate = useNavigate();

  return (
    <div className="App-sub-container">
      <div className="this-container">
        <div className="prod-navigation">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Account
              </li>
            </ol>
          </nav>
          <div className="prod-nav-container">
            <button
              className="btn btn-sm btn-outline-secondary"
              onClick={() => navigate(-1)}
            >
              <i class="bi bi-arrow-left-short"></i> Back
            </button>
            <button className="btn btn-sm btn-danger">
              <i class="bi bi-box-arrow-left"></i> Log out
            </button>
          </div>
        </div>
        <hr className="divider" />
        <div className="account-container">
          <Tab.Container id="left-tabs-example" defaultActiveKey="main">
            <Row>
              <Col sm={2}>
                <Nav variant="pills" className="flex-column top-margin">
                  <Nav.Item>
                    <Nav.Link eventKey="main" href="#">
                      Account main
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="orders" href="#">
                      Orders history
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="transactions" href="#">
                      Transactions
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={10}>
                <Tab.Content className="card">
                  <Tab.Pane eventKey="main">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi deleniti molestiae dolore quia mollitia saepe ut
                    nesciunt vitae quo, impedit fuga quam iusto! Ut culpa
                    voluptatum, porro quos atque ipsa quas dolor expedita? Saepe
                    rem cum eos dicta, cumque quo voluptas repudiandae vero!
                    Quis iusto explicabo ipsam. Dolorem possimus dolore sit iure
                    vel maiores. Id quaerat, ea error optio tempora eaque sequi
                    odio? Odit soluta itaque at reprehenderit illum maxime quas
                    hic voluptatem nostrum, totam dolore molestias sed impedit
                    dignissimos, sit optio! Dignissimos veniam, delectus
                    consequuntur quidem nesciunt quis eos? Pariatur asperiores
                    accusantium repudiandae tenetur similique quae ullam totam
                    animi velit. Ab dolor iste provident voluptates omnis
                    exercitationem error debitis sequi laboriosam. Harum,
                    repellat quidem, quos laboriosam nisi animi voluptates quia
                    impedit debitis unde optio minus aperiam? Quidem maxime
                    aliquid excepturi error assumenda cupiditate! Est maiores
                    nisi animi ullam debitis qui quas id amet nihil minima nulla
                    fuga quo dolores, error quibusdam fugiat eveniet aperiam
                    atque praesentium? Quisquam ad debitis, suscipit hic ea
                    expedita, sunt non qui fugit fuga dicta illum ipsum ipsa ex
                    impedit, vitae inventore a esse? Accusamus distinctio
                    quibusdam perferendis voluptatibus reprehenderit illo totam
                    eveniet nam voluptatum, animi laboriosam quasi eos in eaque
                    facilis velit mollitia quos cum recusandae et. Nostrum
                    commodi eveniet veritatis cumque odit dicta fuga corporis
                    maxime incidunt at, non consequuntur natus facere velit
                    totam consequatur quia sed nisi alias mollitia voluptates
                    unde. Accusamus, sed voluptatum ex sunt, dolorum
                    voluptatibus nesciunt adipisci minima quae magnam suscipit
                    hic assumenda quos quis rem obcaecati, maxime fugiat illum
                    quisquam aperiam libero? Dolores consequatur explicabo
                    commodi magni ipsa nostrum reiciendis esse modi. Cumque vel,
                    quo ipsa, a amet, voluptatibus sint ex iusto veritatis
                    cupiditate enim minus ducimus officiis cum rerum! Maxime hic
                    ipsa enim a voluptatum animi distinctio, voluptas veniam
                    inventore dolorum odio! Voluptatibus animi esse eveniet
                    ipsa?
                  </Tab.Pane>
                  <Tab.Pane eventKey="orders">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa officiis veniam repellendus nam cumque omnis ipsa
                    deserunt quidem doloremque iure, pariatur minus adipisci
                    quod et animi eaque fugit temporibus, fugiat maxime
                    voluptate aspernatur eligendi. Nihil similique earum
                    eligendi porro aliquid error accusamus, autem modi
                    repellendus aperiam ratione officiis velit voluptatum libero
                    tempore molestias vero optio! Et placeat dolore dolorem
                    accusantium, excepturi dignissimos debitis ducimus soluta
                    facere. Possimus suscipit nemo vero! Quas at deserunt
                    provident doloribus earum iure iste rerum! Nulla tempore
                    natus assumenda temporibus sit soluta repudiandae nam sint
                    esse perferendis, repellat eum reprehenderit, necessitatibus
                    recusandae quo, id eligendi sed tempora quae beatae.
                    Suscipit iusto error eius aperiam necessitatibus ducimus eos
                    ea asperiores consequuntur similique consequatur, quae
                    architecto sequi, nulla quod. Ad optio eveniet temporibus
                    consequuntur fuga expedita exercitationem, tenetur, saepe
                    aspernatur, laboriosam soluta vitae nam ab iure
                    necessitatibus nihil voluptatibus! Eos, odit. Explicabo,
                    dolore! Voluptate neque iure quidem delectus modi voluptas,
                    totam ipsa ipsum error reprehenderit incidunt omnis dolor.
                    Molestiae tempore eum consectetur molestias ut? Ullam cumque
                    libero magni, quos quibusdam odit illo natus dolores
                    voluptatum ipsum error. Laudantium expedita maxime sint
                    commodi, temporibus sunt, quam praesentium excepturi veniam
                    voluptate officia vero amet iure provident non odio tenetur
                    et voluptas ex. Quasi, illum sit libero voluptates aperiam
                    quisquam saepe esse eligendi neque ex repellat beatae
                    cupiditate modi ipsum aliquam sunt, fugiat accusamus cum
                    recusandae iure eos? Consectetur aperiam ratione neque
                    delectus, esse impedit ipsum eius culpa nulla commodi.
                    Mollitia sequi iste quam, molestiae perspiciatis deleniti
                    cupiditate doloribus velit quaerat commodi ipsum illum
                    veritatis ipsam rerum aliquid. Facilis autem tempora
                    delectus eos officiis repudiandae saepe impedit? Eaque
                    expedita aut, architecto ipsum quia maiores exercitationem
                    officia non sit recusandae magni modi possimus error.
                    Similique quod earum consequatur doloremque iusto sunt
                    blanditiis tenetur autem assumenda magni consectetur ratione
                    quam, non id nam?
                  </Tab.Pane>
                  <Tab.Pane eventKey="transactions">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quisquam quasi earum, aliquid ipsam modi aliquam ipsa? Illo
                    totam esse dolor laudantium possimus tempora fugiat alias,
                    nam nostrum ab, dicta, deleniti consectetur. Ratione, quis
                    excepturi eaque cum, ex iusto reprehenderit neque nesciunt
                    quaerat, aut optio doloremque fugiat nemo nam accusamus
                    mollitia! Cumque repellendus, aperiam atque reprehenderit
                    voluptatibus recusandae dolores aliquid itaque quibusdam.
                    Cum suscipit sapiente exercitationem accusamus, nemo autem
                    distinctio tempore numquam impedit ea amet nulla blanditiis
                    id minus assumenda consequuntur qui dolorem, tenetur iste
                    deleniti, architecto quo. Illum, debitis et cum explicabo,
                    aperiam harum maiores doloremque expedita placeat minima
                    quidem, alias deleniti tempore magni. Dolore suscipit
                    nostrum officiis voluptates, qui accusamus repellat pariatur
                    praesentium harum adipisci nesciunt rerum aliquid quam
                    quisquam voluptas obcaecati corporis, reprehenderit aut quo
                    eius molestiae officia asperiores cupiditate in. Illum, et.
                    Corrupti ea temporibus, expedita, molestiae in provident
                    unde distinctio dolorem qui enim, deleniti repellat
                    reiciendis esse consequuntur ab. Quis, cupiditate reiciendis
                    nihil explicabo itaque quisquam laborum minima facilis dicta
                    eveniet nulla excepturi repellendus accusamus
                    exercitationem, unde consequuntur soluta et voluptatum
                    possimus, amet iste necessitatibus odio ea quo. Illo aliquam
                    recusandae voluptatem harum incidunt itaque unde ex nemo
                    minus! Harum sequi libero veritatis tempore eaque suscipit,
                    cupiditate dolore atque assumenda alias quisquam
                    necessitatibus molestias nulla optio in possimus et. Qui
                    sequi iste velit enim aspernatur nisi harum, eos unde
                    necessitatibus soluta, porro, incidunt laboriosam dolores
                    quos impedit commodi nobis et nam culpa error voluptates
                    minus ipsam sunt? Fuga, harum minima tempore optio, quisquam
                    fugit sequi, quam voluptatibus animi eum cum deserunt.
                    Incidunt, quia! Accusantium sapiente quae iusto numquam
                    rerum fuga voluptatibus. Veniam, voluptas repellat. Incidunt
                    natus voluptatibus et sapiente modi reprehenderit possimus
                    explicabo autem suscipit, soluta consequuntur quaerat,
                    ducimus similique consectetur nisi? Perferendis odio id
                    laboriosam voluptatem, vel in eius repellat optio culpa
                    maxime fuga enim!
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Account;
