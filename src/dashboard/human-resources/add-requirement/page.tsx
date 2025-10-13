'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RequisitionForm } from '@/components/requisition-form';
import { RequisitionTable } from '@/components/requisition-table';
import type { ManpowerRequisition } from '@/types/recruitment';
import { Plus, Download, Upload } from 'lucide-react';
import { DashboardStrip } from '@/components/custom/DashboardStrip';

export default function RecruitmentPage() {
    const [requisitions, setRequisitions] = useState<ManpowerRequisition[]>([]);
    const [showForm, setShowForm] = useState(false);
    const [editingRequisition, setEditingRequisition] = useState<ManpowerRequisition | null>(null);

    const handleCreateRequisition = (data: any) => {
        if (editingRequisition) {
            // Update existing
            setRequisitions(prev =>
                prev.map(req =>
                    req.id === editingRequisition.id
                        ? { ...data, id: editingRequisition.id }
                        : req
                )
            );
        } else {
            // Create new
            const newRequisition: ManpowerRequisition = {
                ...data,
                id: Math.random().toString(36).substr(2, 9),
            };
            setRequisitions(prev => [...prev, newRequisition]);
        }
        setShowForm(false);
        setEditingRequisition(null);
    };

    const handleEdit = (requisition: ManpowerRequisition) => {
        setEditingRequisition(requisition);
        setShowForm(true);
    };

    const handleDelete = (id: string) => {
        if (confirm('Are you sure you want to delete this requisition?')) {
            setRequisitions(prev => prev.filter(req => req.id !== id));
        }
    };

    const handleGenerateOffer = (requisition: ManpowerRequisition) => {
        // Generate offer letter logic here
        alert(`Generating offer letter for ${requisition.positionTitle}`);
    };

    const handleCancelForm = () => {
        setShowForm(false);
        setEditingRequisition(null);
    };

    return (
        <div className="w-full p-3 md:p-7">
            <DashboardStrip title="Human Resources/Add Requisition" />
            <div className="container mx-auto py-6 space-y-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold">Recruitment & Talent Acquisition</h1>
                        <p className="text-muted-foreground">
                            Manage manpower requisitions and track recruitment process
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline">
                            <Upload className="h-4 w-4 mr-2" />
                            Import
                        </Button>
                        <Button variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Export
                        </Button>
                        <Button onClick={() => setShowForm(true)}>
                            <Plus className="h-4 w-4 mr-2" />
                            New Requisition
                        </Button>
                    </div>
                </div>

                {showForm ? (
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                {editingRequisition ? 'Edit Requisition' : 'Create New Requisition'}
                            </CardTitle>
                            <CardDescription>
                                Fill in the details for the manpower requisition
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <RequisitionForm
                                onSubmit={handleCreateRequisition}
                                onCancel={handleCancelForm}
                                initialData={
                                    editingRequisition
                                        ? {
                                            ...editingRequisition,
                                            requestDate: editingRequisition.requestDate instanceof Date
                                                ? editingRequisition.requestDate.toISOString().slice(0, 10)
                                                : editingRequisition.requestDate,
                                        }
                                        : undefined
                                }
                            />
                        </CardContent>
                    </Card>
                ) : (
                    <Card>
                        <CardHeader>
                            <CardTitle>Manpower Requisitions</CardTitle>
                            <CardDescription>
                                View and manage all manpower requisition requests
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <RequisitionTable
                                data={requisitions}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                                onGenerateOffer={handleGenerateOffer}
                            />
                        </CardContent>
                    </Card>
                )}

                {/* Statistics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Requisitions</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{requisitions.length}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Pending Approval</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {requisitions.filter(req => req.approvalStatus === 'pending').length}
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Approved</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {requisitions.filter(req => req.approvalStatus === 'approved').length}
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Open Positions</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {requisitions
                                    .filter(req => req.approvalStatus === 'approved')
                                    .reduce((sum, req) => sum + req.numberOfOpenings, 0)}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}