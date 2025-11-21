

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
    padding: "30 40",
    fontSize: 10.5,
    fontFamily: "Helvetica",
    lineHeight: 1.4,
    color: "#000000",
    backgroundColor: "#ffffff",
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#000000",
    paddingBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#000000",
    letterSpacing: 0.5,
  },
  contact: {
    fontSize: 9.5,
    color: "#000000",
    marginTop: 4,
    lineHeight: 1.3,
  },
  contactItem: {
    marginBottom: 2,
  },
  section: {
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 6,
    textTransform: "uppercase",
    letterSpacing: 1,
    borderBottomWidth: 1.5,
    borderBottomColor: "#000000",
    paddingBottom: 2,
  },
  entry: {
    marginBottom: 10,
  },
  entryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  entryTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#000000",
  },
  entryOrganization: {
    fontSize: 10.5,
    color: "#000000",
    marginBottom: 2,
  },
  entryDuration: {
    fontSize: 9.5,
    color: "#000000",
    fontStyle: "italic",
  },
  entryDescription: {
    fontSize: 10,
    color: "#000000",
    marginTop: 3,
    lineHeight: 1.4,
    textAlign: "justify",
  },
  skillsText: {
    fontSize: 10,
    color: "#000000",
    lineHeight: 1.5,
  },
  bullet: {
    fontSize: 10,
    marginTop: 2,
    paddingLeft: 15,
    color: "#000000",
  },
});

export default function ResumePDF({ data }) {
  const {
    contactInfo,
    name,
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
          <Text style={styles.name}>{name || contactInfo?.name || "Your Name"}</Text>
          <View style={styles.contact}>
            {contactInfo?.email && (
              <Text style={styles.contactItem}>Email: {contactInfo.email}</Text>
            )}
            {contactInfo?.mobile && (
              <Text style={styles.contactItem}>Phone: {contactInfo.mobile}</Text>
            )}
            {contactInfo?.linkedin && (
              <Text style={styles.contactItem}>LinkedIn: {contactInfo.linkedin}</Text>
            )}
            {contactInfo?.twitter && (
              <Text style={styles.contactItem}>Twitter: {contactInfo.twitter}</Text>
            )}
          </View>
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
            <Text style={styles.sectionTitle}>Technical Skills</Text>
            <Text style={styles.skillsText}>{skills}</Text>
          </View>
        )}

        {/* Experience */}
        {experience?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Experience</Text>
            {experience.map((item, i) => {
              const duration = item.current
                ? `${item.startDate} - Present`
                : `${item.startDate} - ${item.endDate}`;
              return (
                <View key={i} style={styles.entry}>
                  <View style={styles.entryHeader}>
                    <Text style={styles.entryTitle}>{item.title}</Text>
                    <Text style={styles.entryDuration}>{duration}</Text>
                  </View>
                  <Text style={styles.entryOrganization}>{item.organization}</Text>
                  <Text style={styles.entryDescription}>{item.description}</Text>
                </View>
              );
            })}
          </View>
        )}

        {/* Education */}
        {education?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {education.map((item, i) => {
              const duration = item.current
                ? `${item.startDate} - Present`
                : `${item.startDate} - ${item.endDate}`;
              return (
                <View key={i} style={styles.entry}>
                  <View style={styles.entryHeader}>
                    <Text style={styles.entryTitle}>{item.title}</Text>
                    <Text style={styles.entryDuration}>{duration}</Text>
                  </View>
                  <Text style={styles.entryOrganization}>{item.organization}</Text>
                  {item.description && (
                    <Text style={styles.entryDescription}>{item.description}</Text>
                  )}
                </View>
              );
            })}
          </View>
        )}

        {/* Projects */}
        {projects?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects</Text>
            {projects.map((item, i) => {
              const duration = item.current
                ? `${item.startDate} - Present`
                : item.startDate && item.endDate
                ? `${item.startDate} - ${item.endDate}`
                : "";
              return (
                <View key={i} style={styles.entry}>
                  <View style={styles.entryHeader}>
                    <Text style={styles.entryTitle}>{item.title}</Text>
                    {duration && <Text style={styles.entryDuration}>{duration}</Text>}
                  </View>
                  {item.organization && (
                    <Text style={styles.entryOrganization}>{item.organization}</Text>
                  )}
                  <Text style={styles.entryDescription}>{item.description}</Text>
                </View>
              );
            })}
          </View>
        )}
      </Page>
    </Document>
  );
}
