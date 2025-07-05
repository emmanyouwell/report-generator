'use clinent';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from '@react-pdf/renderer';

Font.register({
  family: 'BookmanOldStyle',
  fonts: [
    {
      src: 'http://localhost:3000/fonts/BOOKOS.TTF',
      fontWeight: 'normal',
      fontStyle: 'normal',
    },
    {
      src: 'http://localhost:3000/fonts/BOOKOSB.TTF',
      fontWeight: 'bold',
      fontStyle: 'normal',
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  headerImg: {
    width: '250px',
    height: 'auto',
    marginHorizontal: 'auto',
  },
  section: {
    marginHorizontal: 10,
    padding: 10,
    // flexGrow: 1,
  },
  highlight: {
    fontSize: 12,
    fontFamily: 'BookmanOldStyle',
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
  text: {
    fontSize: 12,
    fontFamily: 'BookmanOldStyle',
    color: '#333',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    border: '1pt solid black',
    fontSize: 12,
    minHeight: 100,
  },
  bold: {
    fontWeight: 'bold',
    fontFamily: 'BookmanOldStyle',
    marginBottom: 4,
    borderBottom: '1pt solid black',
    textAlign: 'center',
  },
  content: {
    fontFamily: 'BookmanOldStyle',
    fontSize: 9,
    paddingHorizontal: 5,
  },
  contentImg: {
    width: 'auto',
    height: '100px',
    marginHorizontal: 'auto',
  },
  footerLabel: {
    fontSize: 12,
    fontFamily: 'BookmanOldStyle',
    width: '100%',
  },
  footerRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  footerName: {
    fontSize: 12,
    fontFamily: 'BookmanOldStyle',
    width: '100%',
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
  footerPosition: {
    fontSize: 12,
    fontFamily: 'BookmanOldStyle',
    width: '100%',
  },
});
const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
// const cellData = [
//   {
//     content: `On January 2, I visited all the sections I handled, but unfortunately, there were no learners inside; only the advisers were there.`,
//     img: 'http://localhost:3000/images/header.png',
//   },
//   {
//     content: `As of today, I have catered to eight learners in the first session for remedial reading in Grade 1 at Building 1 from 7:00 to 8:30 AM. The second session, from 9:00 to 10:00 AM, was for fast readers.`,
//     img: 'http://localhost:3000/images/header.png',
//   },
//   {
//     content: `Today, all Grade 1 pupils took their summative exam. We were not allowed to take the children out of the class. I assisted the adviser in checking the test papers.`,
//     img: 'http://localhost:3000/images/header.png',
//   },
//   {
//     content: `I catered to six learners from another building. In the admin, there were only 10 learners in my first session, as some were absent.`,
//     img: 'http://localhost:3000/images/header.png',
//   },
//   {
//     content: `I visited Building 1, my assigned building, but only eight learners were available for tutoring today as some were taking their summative exam.`,
//     img: 'http://localhost:3000/images/header.png',
//   },

// ];
interface ContentBlock {
  content: string;
  img?: string;
}

interface PageData {
  dateRange: string;
  contents: ContentBlock[];
}
const imgSrc = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : process.env.NEXT_PUBLIC_URL;
export default function Format2({ pages }: { pages: PageData[] }) {
  return (
    <Document>
      {pages.map((page, pageIndex) => {
        const rows = Array.from(
          { length: Math.ceil(page.contents.length / 5) },
          (_, i) => page.contents.slice(i * 5, i * 5 + 5)
        );

        return (
          <Page
            size={{ width: 612, height: 936 }}
            orientation='landscape'
            style={styles.page}
            key={`page-${pageIndex}`}
          >
            {/* Header image */}
            <View>
              <Image
                src={`${imgSrc}/images/header.png`}
                style={styles.headerImg}
              />
            </View>
            {/* Teacher's name, school/cluster, and date */}
            <View style={styles.section}>
              <Text style={styles.text}>
                Teacher&apos;s name:{' '}
                <Text style={styles.highlight}>Roselyn L. Mingala</Text>
              </Text>
              <Text style={styles.text}>
                School/Cluster:{' '}
                <Text style={styles.highlight}>
                  EM&apos;s SIGNAL VILLAGE ELEMENTARY SCHOOL/ CLUSTER V
                </Text>
              </Text>
              <Text style={styles.text}>
                Date: <Text style={styles.highlight}>{page.dateRange}</Text>
              </Text>
            </View>

            {/* Table */}
            <View style={styles.section}>
              {/* First Row (5 columns) */}

              {rows.map((row, rowIndex) => (
                <View style={styles.row} key={`row-${pageIndex}-${rowIndex}`}>
                  {row.map((entry, idx) => (
                    <View style={styles.cell} key={`row1-${idx}`}>
                      <Text style={styles.bold}>{daysOfWeek[idx]}</Text>
                      <Text style={styles.content}>• {entry.content}</Text>
                      <Image src={entry.img} style={styles.contentImg} />
                    </View>
                  ))}
                </View>
              ))}
            </View>

            {/* Footer */}
            <View style={styles.section}>
              <View style={styles.footerRow}>
                <Text style={styles.footerLabel}>Prepared by:</Text>
                <Text style={styles.footerLabel}>Checked by:</Text>
              </View>
              <View style={[styles.footerRow, { marginBottom: 0 }]}>
                <Text style={styles.footerName}>ROSELYN L. MINGALA</Text>
                <Text style={styles.footerName}>MA. CARLITA P. AGCAOILI</Text>
              </View>
              <View style={[styles.footerRow, { marginTop: 5 }]}>
                <Text style={styles.footerPosition}>TALAS Teacher</Text>
                <Text style={styles.footerPosition}>
                  Master Teacher / TALAS in-charge
                </Text>
              </View>
            </View>
          </Page>
        );
      })}
    </Document>
  );
}
