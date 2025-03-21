import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Add a function to format dates
export function formatDate(dateString: string): string {
  // Handle "Present" as a special case
  if (dateString === "Present") {
    return dateString;
  }

  try {
    const [month, year] = dateString.split(" ");
    return `${month} ${year}`;
  } catch (error: unknown) {
    console.error(error);
    return dateString;
  }
}

// Function to calculate experience duration
export function calculateExperienceDuration(
  startDate: string,
  endDate: string
): string {
  // If one of the dates is "Present", handle it specially
  if (endDate === "Present") {
    // Parse the start date
    const [startMonth, startYear] = startDate.split(" ");

    // Get current date
    const now = new Date();
    const currentMonth = now.getMonth(); // 0-indexed
    const currentYear = now.getFullYear();

    // Convert month name to index (0-indexed)
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const startMonthIndex = months.indexOf(startMonth);

    // Calculate the difference in years and months
    let yearDiff = currentYear - parseInt(startYear);
    let monthDiff = currentMonth - startMonthIndex;

    if (monthDiff < 0) {
      yearDiff--;
      monthDiff += 12;
    }

    if (yearDiff > 0 && monthDiff > 0) {
      return `${yearDiff} year${yearDiff > 1 ? "s" : ""}, ${monthDiff} month${
        monthDiff > 1 ? "s" : ""
      }`;
    } else if (yearDiff > 0) {
      return `${yearDiff} year${yearDiff > 1 ? "s" : ""}`;
    } else {
      return `${monthDiff} month${monthDiff > 1 ? "s" : ""}`;
    }
  }

  // If both dates are specified (not "Present")
  try {
    const [startMonth, startYear] = startDate.split(" ");
    const [endMonth, endYear] = endDate.split(" ");

    // Convert month name to index (0-indexed)
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const startMonthIndex = months.indexOf(startMonth);
    const endMonthIndex = months.indexOf(endMonth);

    // Calculate the difference in years and months
    let yearDiff = parseInt(endYear) - parseInt(startYear);
    let monthDiff = endMonthIndex - startMonthIndex;

    if (monthDiff < 0) {
      yearDiff--;
      monthDiff += 12;
    }

    if (yearDiff > 0 && monthDiff > 0) {
      return `${yearDiff} year${yearDiff > 1 ? "s" : ""}, ${monthDiff} month${
        monthDiff > 1 ? "s" : ""
      }`;
    } else if (yearDiff > 0) {
      return `${yearDiff} year${yearDiff > 1 ? "s" : ""}`;
    } else {
      return `${monthDiff} month${monthDiff > 1 ? "s" : ""}`;
    }
  } catch (error: unknown) {
    console.error(error);
    return "Duration unknown";
  }
}

// Function to generate SEO-friendly slugs
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}

// Simple schema generator for structured data (SEO)
export function generatePersonSchema(person: {
  name: string;
  jobTitle: string;
  image: string;
  url: string;
  email: string;
  telephone: string;
  sameAs: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.jobTitle,
    image: person.image,
    url: person.url,
    email: person.email,
    telephone: person.telephone,
    sameAs: person.sameAs,
  };
}

export function ThemeProvider({ children, ...props }: React.PropsWithChildren) {
  return <div {...props}>{children}</div>;
}
