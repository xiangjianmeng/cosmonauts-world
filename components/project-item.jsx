/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const cleanUrl = (item) => item
  .toLowerCase()
  .split(' ')
  .join('-');

const postVariants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};

const ProjectItem = ({
  name, image, network, verified, tags,
}) => (
  <motion.div
    initial="initial"
    animate="enter"
    exit="exit"
    variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
  >
    <div className="max-w-6xl">
      <motion.div variants={postVariants}>
        <Link
          scroll={false}
          href="/projects/[item]"
          as={`/projects/${cleanUrl(name)}`}
        >
          <a>
            <motion.div
              whileHover="hover"
              variants={{ hover: { scale: 0.96 } }}
            >
              <div className="item">
                {network.includes('mainnet') ? (
                  <p className="network-status text-base">
                    {network}
                    {' '}
🚀
                  </p>
                ) : (
                  <p className="network-status text-base">
                    {network}
                    {' '}
🏗
                  </p>
                )}
                <img
                  src={image}
                  alt={name}
                  className="w-16 h-16"
                />
                {verified === 'true' ? (
                  <h3 className="font-medium py-3 title">
                    {name}
                    {' '}
                    <img
                      width={15}
                      height={15}
                      src="/static/icons/check-circle.svg"
                      alt="Verified by cosmonauts! 👩‍🚀"
                      title="Verified by cosmonauts! 👩‍🚀"
                      className="is-verified"
                    />
                  </h3>
                ) : (
                  <h3 className="font-medium py-3">
                    {name}
                    {' '}
                  </h3>
                )}
                {tags.map((tag, index) => (
                  <span className="display-tags" key={index}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </a>
        </Link>
      </motion.div>
    </div>
    <style jsx>
      {`
        .item {
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 1.5rem;
          border-style: none;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
          background: rgb(255, 255, 255);
          border-radius: 4px;
          position: relative;
          height: 13.5rem;
        }

        .network-status {
          position: absolute;
          right: 10px;
          top: 10px;
          opacity: 0.85;
        }

        .title {
          display: flex;
          width: fit-content;
        }

        .is-verified {
          margin-left: 5px;
          cursor: help;
        }

        .display-tags {
          background: rgb(13, 22, 35, 0.70);
          color: white;
          font-size: 11px;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 6px 12px 6px 14px;
          border-radius: 6px;
          display: inline-flex;
          margin-top: 5px;
          margin-right: 5px;
        }

        .btn-container {
          margin-top: 32px;
          width: 100%;
          -webkit-box-pack: center;
          justify-content: center;
          display: flex;
        }

        button {
          width: 100%;
          font-weight: 600;
          color: rgb(92, 97, 102);
          background: rgb(236, 237, 238);
          padding: 12px;
          border-radius: 4px;
        }

        @media screen and (max-width: 600px) {
          .item {
            height: 15.5rem;
          }
        }

        @media screen and (max-width: 500px) {
          .item {
            height: 13.5rem;
          }
        }
        `}
    </style>
  </motion.div>
);

export default ProjectItem;
