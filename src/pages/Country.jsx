import { Section, Container, CountryInfo, Loader } from 'components';

import { useGetCountry } from 'hooks/useGetCountry';
import { Link, Navigate, useLocation } from 'react-router-dom';

export const Country = () => {
  const location = useLocation();
  const goBackLink = location?.state?.from ?? '/';

  const { country, error, isLoading } = useGetCountry();

  return (
    <Section>
      <Container>
        <div
          style={{
            marginBottom: '60px',
            color: '#F2F2F2',
            letterSpacing: '0.06em',
            borderColor: 'grey',
          }}
        >
          <Link to={goBackLink}>Go Back</Link>
        </div>
        {isLoading && <Loader />}
        {error && <Navigate to={'/'} replace />}
        <CountryInfo country={country} />
      </Container>
    </Section>
  );
};
