import React from "react";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { BiSort } from "react-icons/bi";
import { MdSort } from "react-icons/md";
import { AiOutlineDown } from "react-icons/ai";
import { data } from "../Utils/data";

const ProjectTable = () => {
    const [projects, setProjects] = useState(data);

    const [sortConfig, setSortConfig] = useState<{
        key: string;
        direction: String;
    } | null>(null);

    const [dropdownvisible, setDropdownVisible] = useState(false);
    const [filtersVisible, setFiltersVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [filters, setFilters] = useState({
        name: "",
        country: "",
        email: "",
        projects: "",
        status: "",
    })
    const [statusDropdownVisible, setStatusDropdownVisible] = useState<number | null>(null);

    const sortProjects = (key: string) => {
        let sortedProjects = [...projects];

        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === "ascending"
        ) {
            sortedProjects.sort((a, b) => (a[key] > b[key] ? -1 : 1));
            setSortConfig({ key, direction: "descending" });
        } else {
            sortedProjects.sort((a, b) => (a[key] > b[key] ? 1 : -1));
            setSortConfig({ key, direction: "ascending" });
        }
        setProjects(sortedProjects);
    };

    const handleSortOptionClick = (key: string) => {
        sortProjects(key);
        setDropdownVisible(false);
    }

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value,
        })
    }

    const handleStatusChange = (index: number, newStatus: string) => {
        const updatedProjects = projects.map((project, i) =>
            i === index
                ? {
                    ...project,
                    status: newStatus,
                    progress: newStatus === "Completed" ? "100%" : project.progress,
                }
                : project
        );
        setProjects(updatedProjects);
        setStatusDropdownVisible(null);
    };


    const filteredProjects = projects.filter(
        (project) =>
            (searchQuery === "" ||
                Object.values(project).some((value) =>
                    value.toLowerCase().includes(searchQuery.toLowerCase())
                )) &&
            (filters.name === "" ||
                project.client.toLowerCase().includes(filters.name.toLowerCase())) &&
            (filters.country === "" ||
                project.country
                    .toLowerCase()
                    .includes(filters.country.toLowerCase())) &&
            (filters.email === "" ||
                project.email.toLowerCase().includes(filters.email.toLowerCase())) &&
            (filters.project === "" ||
                project.project
                    .toLowerCase()
                    .includes(filters.project.toLowerCase())) &&
            (filters.status === "" ||
                project.status.toLowerCase().includes(filters.status.toLowerCase()))
    );
    )
}

export default ProjectTable