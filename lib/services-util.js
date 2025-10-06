import fs from "fs";
import path from "path";
import matter from "gray-matter";

const servicesDirectory = path.join(process.cwd(), "services");

export function getServicesFiles() {
  return fs.readdirSync(servicesDirectory);
}

export function getServiceData(serviceIdentifier) {
  const serviceSlug = serviceIdentifier.replace(/\.md$/, ""); // removes the file extension
  const filePath = path.join(servicesDirectory, `${serviceSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const serviceData = {
    slug: serviceSlug,
    ...data,
    content,
  };

  return serviceData;
}

export function getAllServices() {
  const serviceFiles = getServicesFiles();

  const allServices = serviceFiles.map((serviceFile) => {
    return getServiceData(serviceFile);
  });
  return allServices;
}
