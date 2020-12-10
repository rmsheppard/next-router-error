
const data = [
  { projectId: 111, packageId: 222, title: 'Managed Project Title', companyId: 100 }
];

const handler = async (req, res) => {

  setTimeout(() => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data[0]));
  }, 1500);
};

export default handler;