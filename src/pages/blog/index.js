import Head from 'next/head';
import Link from 'next/link';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// u30d6u30edu30b0u8a18u4e8bu30c7u30fcu30bfu306eu30b5u30f3u30d7u30eb
const blogPosts = [
  {
    id: 1,
    title: 'u6700u65b0u306eu30d7u30edu30b8u30a7u30afu30c8u306bu3064u3044u3066',
    date: '2025-03-15',
    excerpt: 'u6700u8fd1u53d6u308au7d44u3093u3067u3044u308bu30d7u30edu30b8u30a7u30afu30c8u306bu3064u3044u3066u306eu8a73u7d30u3068u6280u8853u30b9u30bfu30c3u30afu306bu3064u3044u3066u3054u7d39u4ecbu3057u307eu3059u3002',
    slug: 'latest-project'
  },
  {
    id: 2,
    title: 'Next.jsu3068Reactu306eu57fau672c',
    date: '2025-02-20',
    excerpt: 'Next.jsu3068Reactu306eu57fau672cu7684u306au4f7fu3044u65b9u3068u30d9u30b9u30c8u30d7u30e9u30afu30c6u30a3u30b9u306bu3064u3044u3066u8aacu660eu3057u307eu3059u3002',
    slug: 'nextjs-react-basics'
  },
  {
    id: 3,
    title: 'u30d5u30edu30f3u30c8u30a8u30f3u30c9u958bu767au306eu30c8u30ecu30f3u30c9 2025',
    date: '2025-01-10',
    excerpt: '2025u5e74u306eu30d5u30edu30f3u30c8u30a8u30f3u30c9u958bu767au306eu30c8u30ecu30f3u30c9u3068u6ce8u76eeu3059u3079u304du6280u8853u306bu3064u3044u3066u3054u7d39u4ecbu3057u307eu3059u3002',
    slug: 'frontend-trends-2025'
  }
];

export default function Blog() {
  return (
    <div>
      <Head>
        <title>u30d6u30edu30b0 | u30ddu30fcu30c8u30d5u30a9u30eau30aa</title>
        <meta name="description" content="u958bu767au8005u306eu30d6u30edu30b0u3068u6280u8853u8a18u4e8b" />
      </Head>

      <Header />

      <Container className="py-5">
        <h1 className="text-center mb-5">u30d6u30edu30b0</h1>
        
        <Row>
          {blogPosts.map((post) => (
            <Col md={4} key={post.id} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{post.date}</Card.Subtitle>
                  <Card.Text>{post.excerpt}</Card.Text>
                  <Link href={`/blog/${post.slug}`} className="btn btn-primary">
                    u7d9au304du3092u8aadu3080
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </div>
  );
}
