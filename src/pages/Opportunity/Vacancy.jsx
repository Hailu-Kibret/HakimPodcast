import React, { useState, useEffect } from "react";
import {
  Layout,
  Breadcrumb,
  Input,
  Button,
  Spin,
  Alert,
  Pagination,
} from "antd";
import JobCard from "../../components/UIElements/Form/Card";
import FooterPage from "../../components/Footer/Footer";
import { GetJobs } from "../../api/job"; // Adjust import path as needed

const { Content } = Layout;

const Vacancy = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [jobData, setJobData] = useState([]);
  const [filteredJobData, setFilteredJobData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await GetJobs();
        if (Array.isArray(data)) {
          setJobData(data);
          setFilteredJobData(data);
        } else {
          console.error("Unexpected API response:", data);
          setJobData([]);
          setFilteredJobData([]);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleSearch = () => {
    const filtered = jobData.filter(
      (job) =>
        job.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        job.description.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    setFilteredJobData(filtered);
    setCurrentPage(1); // Reset to first page
  };

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = Array.isArray(filteredJobData)
    ? filteredJobData.slice(indexOfFirstJob, indexOfLastJob)
    : [];

  const handlePaginationChange = (page) => {
    setCurrentPage(page);
  };

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen bg-[#f4f4f4]">
        <Spin tip="Loading jobs..." size="large" />
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center h-screen bg-[#f4f4f4]">
        <Alert message="Error" description={error} type="error" showIcon />
      </div>
    );

  return (
    <Layout className="min-h-screen bg-[#f4f4f4]">
      <Content className="p-6">
        <Breadcrumb className="mb-4 text-[#888]">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Vacancy</Breadcrumb.Item>
        </Breadcrumb>
        <h1 className=" text-center text-4xl font-bold mb-8 text-blue-600">
          Vacancy
        </h1>
        <div
          className="bg-white p-4 mb-6 rounded-md shadow-sm flex items-center"
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          <Input
            style={{ width: "80%" }}
            className="rounded-md"
            placeholder="Keyword"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <Button
            type="primary"
            className="ml-3 bg-[#0078d4] text-white rounded-md"
            onClick={handleSearch}
          >
            Search Job
          </Button>
        </div>
        <div className="text-center">
          <h2 className="text-lg font-medium text-[#555] mb-6">
            {filteredJobData.length} Jobs Found
          </h2>
        </div>
        {currentJobs.length === 0 ? (
          <div className="text-center text-[#888]">
            No jobs match your search criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {currentJobs.map((job, index) => (
              <JobCard
                key={index}
                title={job.title}
                description={job.description}
                experience={job.experience}
                deadline={job.deadline}
                location={job.location}
                jobType={job.jobType}
                qualifications={job.qualifications}
                keyResponsibilities={job.keyResponsibilities}
                languages={job.languages}
                startDate={job.startDate}
                email={job.email}
                phone={job.phone}
              />
            ))}
          </div>
        )}
        <div className="flex justify-center mt-8">
          <Pagination
            current={currentPage}
            total={filteredJobData.length}
            pageSize={jobsPerPage}
            onChange={handlePaginationChange}
            className="pagination-custom"
          />
        </div>
      </Content>
      <FooterPage />
    </Layout>
  );
};

export default Vacancy;
