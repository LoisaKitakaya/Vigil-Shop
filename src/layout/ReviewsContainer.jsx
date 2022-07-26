const ReviewsContainer = ({ reviews }) => {
  return (
    <div>
      {reviews.map((item) => {
        const list = (
          <>
            <div className="card review-card" key={item.id}>
              <div className="card-body">
                <p className="card-text">
                  <i class="bi bi-star-fill text-warning fs-5"></i>{" "}
                  {item.rating} stars
                </p>
                <p className="card-text">{item.review}</p>
                <br />
                <blockquote className="blockquote mb-0">
                  <footer className="blockquote-footer">
                    {item.user.username}
                  </footer>
                </blockquote>
              </div>
            </div>
          </>
        );

        return list;
      })}
    </div>
  );
};

export default ReviewsContainer;
