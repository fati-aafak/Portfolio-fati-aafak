const Home = () => {
  return (
    <section className="home image" id="home">
      <div>
        <div className="position-relative">
          <h1>
            <span>
              <span className="animated-layer">
                Hello<span>.</span>
              </span>
            </span>
            <span className="position-relative">
              <span className="animated-layer">I am</span>
              <span className="intro animated-layer">
                Développeuse Full stack Spécialisée dans la stack MERN & UI/UX Designer
              </span>
            </span>
            <span>
              <span className="animated-layer">Aafak fatima zahra</span>
            </span>
          </h1>
        </div>
      </div>
      {/* CALL TO ACTION STARTS */}
      <span className="animated-layer animated-btn cta" id="cta">
        <span></span>
      </span>
      {/* CALL TO ACTION ENDS */}
    </section>
  );
};
export default Home;
