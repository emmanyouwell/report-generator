import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from '@react-pdf/renderer';
const apiUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : process.env.NEXT_PUBLIC_URL;
Font.register({
  family: 'BookmanOldStyle',
  fonts: [
    {
      src: `${apiUrl}/fonts/BOOKOS.TTF`,
      fontWeight: 'normal',
      fontStyle: 'normal',
    },
    {
      src: `${apiUrl}/fonts/BOOKOSB.TTF`,
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
    height: '80px',
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

const cellData = [
  {
    date: 'February 3, 2025',
    content: `On January 2, I visited all the sections I handled, but unfortunately, there were no learners inside; only the advisers were there.`,
    img: `${apiUrl}/images/header.png`,
  },
  {
    date: 'February 4, 2025',
    content: `As of today, I have catered to eight learners in the first session for remedial reading in Grade 1 at Building 1 from 7:00 to 8:30 AM. The second session, from 9:00 to 10:00 AM, was for fast readers.`,
    img: `${apiUrl}/images/header.png`,
  },
  {
    date: 'February 5, 2025',
    content: `Today, all Grade 1 pupils took their summative exam. We were not allowed to take the children out of the class. I assisted the adviser in checking the test papers.`,
    img: `${apiUrl}/images/header.png`,
  },
  {
    date: 'February 6, 2025',
    content: `I catered to six learners from another building. In the admin, there were only 10 learners in my first session, as some were absent.`,
    img: `${apiUrl}/images/header.png`,
  },
  {
    date: 'February 7, 2025',
    content: `I visited Building 1, my assigned building, but only eight learners were available for tutoring today as some were taking their summative exam.`,
    img: `${apiUrl}/images/header.png`,
  },
  {
    date: 'February 10, 2025',
    content: `Substitute teacher to Ma’am Camille Garcia`,
    img: `${apiUrl}/images/header.png`,
  },
  {
    date: 'February 11, 2025',
    content: `Substitute teacher to Ma’am Camille Garcia`,
    img: `${apiUrl}/images/header.png`,
  },
  {
    date: 'February 12, 2025',
    content: `Substitute teacher to Ma’am Camille Garcia`,
    img: `${apiUrl}/images/header.png`,
  },
  {
    date: 'February13, 2025',
    content: `Substitute teacher to Ma’am Camille Garcia`,
    img: `${apiUrl}/images/header.png`,
  },
  {
    date: 'February 14, 2025',
    content: `Substitute teacher to Ma’am Camille Garcia`,
    img: `${apiUrl}/images/header.png`,
  },
];

const Format1 = () => {
  return (
    <Document>
      <Page
        size={{ width: 612, height: 936 }}
        orientation='landscape'
        style={styles.page}
      >
        {/* Header image */}
        <View>
          <Image src={`${apiUrl}/images/header.png`} style={styles.headerImg} />
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
            Date: <Text style={styles.highlight}>[Insert Date Here]</Text>
          </Text>
        </View>

        {/* Table */}
        <View style={styles.section}>
          {/* First Row (5 columns) */}
          <View style={styles.row}>
            {cellData.slice(0, 5).map((entry, idx) => (
              <View style={styles.cell} key={`row1-${idx}`}>
                <Text style={styles.bold}>{entry.date}</Text>
                <Text style={styles.content}>• {entry.content}</Text>
                <Image src={entry.img} style={styles.contentImg} />
              </View>
            ))}
          </View>

          {/* Second Row (5 columns) */}
          <View style={styles.row}>
            {cellData.slice(5).map((entry, idx) => (
              <View style={styles.cell} key={`row2-${idx}`}>
                <Text style={styles.bold}>{entry.date}</Text>
                <Text style={styles.content}>• {entry.content}</Text>
                <Image src={entry.img} style={styles.contentImg} />
              </View>
            ))}
          </View>
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
    </Document>
  );
}

export default Format1;