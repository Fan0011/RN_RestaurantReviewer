import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import StarRatingComponent from 'react-star-rating-component';
import Paragraph from 'grommet/components/Paragraph';
import Heading from 'grommet/components/Heading';

const RestaurantGrid = ({
  restaurants,
}) => (
  <div className={styles.restaurantGrid}>
    {restaurants.map(rest =>
      <div className={styles.panel}>
        <div className={styles.imageWrapper}>
          <Link className={styles.link} to={`/restaurants/${rest.id}`}>
            <div className={styles.contents}>
              <Heading uppercase tag="h3" className={styles.title}>{rest.name}</Heading>
              <StarRatingComponent
                name=""
                starColor={"#FF7D28"}
                value={rest.average_rating}
                editing={false}
              />
            </div>
            <img className={styles.cardImage} src={rest.image} alt="Restaurant" />
          </Link>
        </div>
        <div className={styles.cardInfo}>
          <Paragraph>{rest.city}, {rest.state} {rest.country}</Paragraph>
          <Paragraph>{rest.phone}</Paragraph>
          <Paragraph><a href={rest.website}>{rest.website}</a></Paragraph>
          <Paragraph>{rest.type.name}</Paragraph>
        </div>
      </div>
    )}
  </div>
);

RestaurantGrid.propTypes = {
  restaurants: PropTypes.array.isRequired,
};

export default cssModules(RestaurantGrid, styles);
