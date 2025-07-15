"use client";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ResumePDF from "./ResumePDF";

export default function PDFDownloadWrapper({ data }) {
  return (
    <PDFDownloadLink
      document={<ResumePDF data={data} />}
      fileName="resume.pdf"
    >
      {({ loading }) =>
        loading ? (
          <Button disabled>
            <Loader2 className="h-4 w-4 animate-spin" />
            Generating...
          </Button>
        ) : (
          <Button>
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        )
      }
    </PDFDownloadLink>
  );
}
