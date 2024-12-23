import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import '../dashboard.css';

const OrgChart = () => {
    // Example data
    const orgData = {
        name: "CEO",
        children: [
            {
                name: "CTO",
                children: [
                    { name: "Engineering Manager" },
                    { name: "QA Manager" },
                ],
            },
            {
                name: "CFO",
                children: [
                    { name: "Finance Manager" },
                    { name: "Accountant" },
                ],
            },
            {
                name: "COO",
                children: [
                    { name: "Operations Manager" },
                    { name: "HR Manager" },
                ],
            },
        ],
    };

    return (
        <div className="org-chart-container">
            <Tree
                label={
                    <div className="org-node level-1">
                        <strong>CEO</strong>
                    </div>
                }
            >
                <TreeNode
                    label={
                        <div className="org-node level-2">
                            <strong>CTO</strong>
                        </div>
                    }
                >
                    <TreeNode
                        label={<div className="org-node level-3">Engineering Manager</div>}
                    />
                    <TreeNode
                        label={<div className="org-node level-3">QA Manager</div>}
                    />
                </TreeNode>
                <TreeNode
                    label={
                        <div className="org-node level-2">
                            <strong>CFO</strong>
                        </div>
                    }
                >
                    <TreeNode
                        label={<div className="org-node level-3">Finance Manager</div>}
                    />
                    <TreeNode
                        label={<div className="org-node level-3">Accountant</div>}
                    />
                </TreeNode>
                <TreeNode
                    label={
                        <div className="org-node level-2">
                            <strong>COO</strong>
                        </div>
                    }
                >
                    <TreeNode
                        label={<div className="org-node level-3">Operations Manager</div>}
                    />
                    <TreeNode
                        label={<div className="org-node level-3">HR Manager</div>}
                    />
                </TreeNode>
            </Tree>
        </div>
    );
};

export default OrgChart;
