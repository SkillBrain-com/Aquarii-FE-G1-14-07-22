function getCompanyName() {
  return this.name;
}

function getCompanyWebsite() {
  return this.website;
}

export const makeCompany = (name, website) => {
  return {
    name,
    website,
    getCompanyName,
    getCompanyWebsite
  };
};

export function Company(name, website) {
  this.name = name;
  this.website = website;
  this.getCompanyName = getCompanyName;
  this.getCompanyWebsite = getCompanyWebsite;

  this.setCompanyName = function (name) {
    this.name = name;
  };
}
