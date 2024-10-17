"use client";

import styled from "@emotion/styled";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { Grid } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  demoLink: string;
  githubLink: string | null;
};

type Props = {
  projects: Project[];
};

const ProjectCard = ({ projects }: Props) => {
  const router = useRouter();
  return (
    <Grid container spacing={3}>
      {projects?.map(
        ({ id, title, description, imageUrl, demoLink, githubLink }) => (
          <Grid item xs={12} md={6} key={id}>
            <Card>
              <img
                src={imageUrl}
                alt="Picture of the project"
                width={200}
                height={200}
              />

              <CardContent>
                <h3>{title}</h3>
                <p>{description}</p>
                <Links>
                  {githubLink && (
                    <a
                      href={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon />
                    </a>
                  )}
                  <a href={demoLink} target="_blank" rel="noopener noreferrer">
                    <LaunchIcon />
                  </a>
                </Links>
              </CardContent>
            </Card>
          </Grid>
        )
      )}
    </Grid>
  );
};

const Card = styled.div`
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: border-color 0.2s ease-in-out;

  &:hover {
    border-color: #fff;
  }

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const CardContent = styled.div`
  padding: 16px;

  h3 {
    font-size: 16px;
    margin-bottom: 12px;
  }
  p {
    font-size: 14px;
    line-height: 1.4;
    color: #666;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 16px;

  a {
    border-radius: 4px;
    text-decoration: none;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.1);

    svg {
      transition: all 0.2s ease-in-out;

      &:hover {
        color: #fff;
      }
    }
  }
`;

export default ProjectCard;
