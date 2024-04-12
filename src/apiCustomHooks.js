import { useState, useEffect } from "react";
import JoblyApi from "../api";


function useFetchCompanies() {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchFilter, setSearchFilter] = useState("");

  async function fetchCompanies(searchParam = "") {
      setIsLoading(true);
      const companiesResponse = await JoblyApi.getCompanies(searchParam);
      setCompanies(companiesResponse);
      setIsLoading(false);
  }

  useEffect(() => {
      fetchCompanies(searchFilter);
  }, [searchFilter]);

  return [companies, isLoading, searchFilter, setSearchFilter]
}


function useFetchJobs() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchFilter, setSearchFilter] = useState("");

  async function fetchJobs(searchParam = "") {
      setIsLoading(true);
      const jobsResponse = await JoblyApi.getJobs(searchParam);
      setJobs(jobsResponse);
      setIsLoading(false);
  }

  useEffect(() => {
      fetchJobs(searchFilter);
  }, [searchFilter]);

  return [jobs, isLoading, searchFilter, setSearchFilter]
}



export {
  useFetchCompanies,
  useFetchJobs
}