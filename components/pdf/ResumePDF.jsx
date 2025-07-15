// // import React from "react";
// // import {
// //   Page,
// //   Text,
// //   View,
// //   Document,
// //   StyleSheet,
// //   Font,
// // } from "@react-pdf/renderer";

// // const styles = StyleSheet.create({
// //   page: {
// //     padding: 30,
// //     fontSize: 12,
// //     fontFamily: "Helvetica",
// //     lineHeight: 1.5,
// //   },
// //   section: {
// //     marginBottom: 10,
// //   },
// //   heading: {
// //     fontSize: 16,
// //     marginBottom: 6,
// //     fontWeight: "bold",
// //   },
// //   item: {
// //     marginBottom: 4,
// //   },
// // });

// // export default function ResumePDF({ data }) {
// //   const {
// //     contactInfo,
// //     summary,
// //     skills,
// //     experience,
// //     education,
// //     projects,
// //   } = data;

// //   return (
// //     <Document>
// //       <Page size="A4" style={styles.page}>
// //         <View style={styles.section}>
// //           <Text style={styles.heading}>Contact Information</Text>
// //           {contactInfo?.email && <Text>Email: {contactInfo.email}</Text>}
// //           {contactInfo?.mobile && <Text>Mobile: {contactInfo.mobile}</Text>}
// //           {contactInfo?.linkedin && <Text>LinkedIn: {contactInfo.linkedin}</Text>}
// //           {contactInfo?.twitter && <Text>Twitter: {contactInfo.twitter}</Text>}
// //         </View>

// //         {summary && (
// //           <View style={styles.section}>
// //             <Text style={styles.heading}>Professional Summary</Text>
// //             <Text>{summary}</Text>
// //           </View>
// //         )}

// //         {skills && (
// //           <View style={styles.section}>
// //             <Text style={styles.heading}>Skills</Text>
// //             <Text>{skills}</Text>
// //           </View>
// //         )}

// //         {experience?.length > 0 && (
// //           <View style={styles.section}>
// //             <Text style={styles.heading}>Work Experience</Text>
// //             {experience.map((item, i) => (
// //               <View key={i} style={styles.item}>
// //                 <Text>{item.title} — {item.company}</Text>
// //                 <Text>{item.description}</Text>
// //               </View>
// //             ))}
// //           </View>
// //         )}

// //         {education?.length > 0 && (
// //           <View style={styles.section}>
// //             <Text style={styles.heading}>Education</Text>
// //             {education.map((item, i) => (
// //               <View key={i} style={styles.item}>
// //                 <Text>{item.degree} — {item.institution}</Text>
// //                 <Text>{item.description}</Text>
// //               </View>
// //             ))}
// //           </View>
// //         )}

// //         {projects?.length > 0 && (
// //           <View style={styles.section}>
// //             <Text style={styles.heading}>Projects</Text>
// //             {projects.map((item, i) => (
// //               <View key={i} style={styles.item}>
// //                 <Text>{item.title}</Text>
// //                 <Text>{item.description}</Text>
// //               </View>
// //             ))}
// //           </View>
// //         )}
// //       </Page>
// //     </Document>
// //   );
// // }


// import React from "react";
// import {
//   Page,
//   Text,
//   View,
//   Document,
//   StyleSheet,
// } from "@react-pdf/renderer";

// // PDF Styles
// const styles = StyleSheet.create({
//   page: {
//     padding: 30,
//     fontSize: 12,
//     fontFamily: "Helvetica",
//     lineHeight: 1.5,
//   },
//   name: {
//     fontSize: 22,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 10,
//     textTransform: "uppercase",
//   },
//   section: {
//     marginBottom: 10,
//   },
//   heading: {
//     fontSize: 16,
//     marginBottom: 6,
//     fontWeight: "bold",
//   },
//   item: {
//     marginBottom: 4,
//   },
// });

// export default function ResumePDF({ data }) {
//   const {
//     name,
//     contactInfo,
//     summary,
//     skills,
//     experience,
//     education,
//     projects,
//   } = data;

//   const userName = data?.contactInfo?.name ; // Add your name here

//   return (
//     <Document>
//       <Page size="A4" style={styles.page}>
//         {/* Name at the top */}
//         <Text style={styles.name}>{userName}</Text>

//         {/* Contact Info */}
//         <View style={styles.section}>
//           <Text style={styles.heading}>Contact Information</Text>
//           {contactInfo?.email && <Text>Email: {contactInfo.email}</Text>}
//           {contactInfo?.mobile && <Text>Mobile: {contactInfo.mobile}</Text>}
//           {contactInfo?.linkedin && <Text>LinkedIn: {contactInfo.linkedin}</Text>}
//           {contactInfo?.twitter && <Text>Twitter: {contactInfo.twitter}</Text>}
//         </View>

//         {summary && (
//           <View style={styles.section}>
//             <Text style={styles.heading}>Professional Summary</Text>
//             <Text>{summary}</Text>
//           </View>
//         )}

//         {skills && (
//           <View style={styles.section}>
//             <Text style={styles.heading}>Skills</Text>
//             <Text>{skills}</Text>
//           </View>
//         )}

//         {experience?.length > 0 && (
//           <View style={styles.section}>
//             <Text style={styles.heading}>Work Experience</Text>
//             {experience.map((item, i) => (
//               <View key={i} style={styles.item}>
//                 <Text>{item.title} — {item.company}</Text>
//                 <Text>{item.description}</Text>
//               </View>
//             ))}
//           </View>
//         )}

//         {education?.length > 0 && (
//           <View style={styles.section}>
//             <Text style={styles.heading}>Education</Text>
//             {education.map((item, i) => (
//               <View key={i} style={styles.item}>
//                 <Text>{item.degree} — {item.institution}</Text>
//                 <Text>{item.description}</Text>
//               </View>
//             ))}
//           </View>
//         )}

//         {projects?.length > 0 && (
//           <View style={styles.section}>
//             <Text style={styles.heading}>Projects</Text>
//             {projects.map((item, i) => (
//               <View key={i} style={styles.item}>
//                 <Text>{item.title}</Text>
//                 <Text>{item.description}</Text>
//               </View>
//             ))}
//           </View>
//         )}
//       </Page>
//     </Document>
//   );
// }


import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Link,
} from "@react-pdf/renderer";

Font.register({
  family: "Inter",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrKbjJt9tQABx5Zeb4jPY.woff2",
      fontWeight: "normal",
    },
    {
      src: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrKbjJt9tQABx5Zeb4jPY.woff2",
      fontWeight: "bold",
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: "Helvetica",
    lineHeight: 1.5,
    color: "#333",
  },
  header: {
    textAlign: "center",
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#111",
  },
  contact: {
    fontSize: 10,
    color: "#555",
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 8,
    textTransform: "uppercase",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 3,
  },
  entry: {
    marginBottom: 6,
  },
  entryTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#222",
  },
  entrySubtitle: {
    fontSize: 10,
    fontStyle: "italic",
    color: "#555",
  },
  entryDescription: {
    fontSize: 10,
    color: "#333",
    marginTop: 2,
  },
});

export default function ResumePDF({ data }) {
  const {
    contactInfo,
    summary,
    skills,
    experience,
    education,
    projects,
  } = data;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{contactInfo?.name || "Your Name"}</Text>
          <Text style={styles.contact}>
            {contactInfo?.email} | {contactInfo?.mobile} |{" "}
            {contactInfo?.linkedin && (
              <Link src={contactInfo.linkedin}>{contactInfo.linkedin}</Link>
            )}
            {contactInfo?.twitter && (
              <>
                {" | "}
                <Link src={contactInfo.twitter}>{contactInfo.twitter}</Link>
              </>
            )}
          </Text>
        </View>

        {/* Summary */}
        {summary && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Summary</Text>
            <Text style={styles.entryDescription}>{summary}</Text>
          </View>
        )}

        {/* Skills */}
        {skills && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <Text style={styles.entryDescription}>{skills}</Text>
          </View>
        )}

        {/* Experience */}
        {experience?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Work Experience</Text>
            {experience.map((item, i) => (
              <View key={i} style={styles.entry}>
                <Text style={styles.entryTitle}>
                  {item.title} — {item.company}
                </Text>
                <Text style={styles.entrySubtitle}>{item.duration}</Text>
                <Text style={styles.entryDescription}>{item.description}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Education */}
        {education?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {education.map((item, i) => (
              <View key={i} style={styles.entry}>
                <Text style={styles.entryTitle}>
                  {item.degree} — {item.institution}
                </Text>
                <Text style={styles.entrySubtitle}>{item.duration}</Text>
                <Text style={styles.entryDescription}>{item.description}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Projects */}
        {projects?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects</Text>
            {projects.map((item, i) => (
              <View key={i} style={styles.entry}>
                <Text style={styles.entryTitle}>{item.title}</Text>
                <Text style={styles.entryDescription}>{item.description}</Text>
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
}
