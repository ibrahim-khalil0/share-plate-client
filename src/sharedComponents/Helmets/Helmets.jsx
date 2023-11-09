import { Helmet } from 'react-helmet';

const Helmets = ({title}) => {
    return (
        <Helmet>
                <meta charSet="utf-8" />
                <title>Share Plate {title}</title>
                <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
    );
};

export default Helmets;