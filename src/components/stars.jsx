import { RiStarFill, RiStarHalfFill, RiStarLine } from 'react-icons/ri';

function Stars({ ratings, color, size = 25 }) {
  const filledStars = parseInt(ratings);
  const halfStar = ratings - filledStars >= 0.38;
  const emptyStars = 5 - filledStars - (halfStar ? 1 : 0);
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {!!ratings && (
        <>
          {[...Array(filledStars)].map((_, i) => (
            <RiStarFill
              style={{ height: size, ...(color && { color }) }}
              key={`${i}-filled`}
              className={{
                color: '#fcbb06',
                width: 'fit-content'
              }}
            />
          ))}
          {halfStar && (
            <RiStarHalfFill
              style={{ height: size, ...(color && { color }) }}
              key="half-filled"
              className={{
                color: '#fcbb06',
                width: 'fit-content'
              }}
            />
          )}
          {[...Array(emptyStars)].map((_, i) => (
            <RiStarLine
              style={{ height: size, ...(color && { color }) }}
              key={`${i}-line`}
              className={{
                color: '#fcbb06',
                width: 'fit-content'
              }}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default Stars;
