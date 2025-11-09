// Centralized certificate placeholders.
// Add URLs (public links or paths in the `public/` folder) to enable "View Certificate" buttons in the UI.

export const CERTIFICATES: {
  internship: string | null;
  bestPaper: string | null;
  otherCertifications: Array<{ title: string; url: string | null }>;
} = {
  // Example: '/certs/adobe-internship.pdf' or 'https://example.com/certs/adobe-internship.pdf'
  internship: "https://drive.google.com/file/d/1alTDQ37hbrjZzxuNPBYW8t_aoEhTjKJK/view?usp=drive_link",
  // Example: '/certs/best-paper.pdf'
  bestPaper: "https://drive.google.com/file/d/1k1TuKYqqZb89y8xukHFv_bpQkenoL1_c/view?usp=drive_link",
  // Add each certification with a title and a URL (or null as placeholder)
  otherCertifications: [
    { title: "JavaScript By Example", url: "https://drive.google.com/file/d/1y9-6XuyBJeoNqPa524IOUiGSHcrlCSMx/view?usp=drive_link" },
    { title: "Artificial Intelligence", url: "https://drive.google.com/file/d/1fB8-s2gEictPt0SyBPdEmYAkAGl2_CEW/view?usp=drive_link" },
  ],
};
