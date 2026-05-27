"use client";

import { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { api, Page, PageTemplate, PageTemplateSection } from "@/lib/api";
import {
  Plus,
  Search,
  Edit2,
  Trash2,
  X,
  Sparkles,
  Layers,
  CheckCircle2,
  AlertCircle,
  ArrowUp,
  ArrowDown,
  Trash,
  Sliders,
  Type,
  Layout,
  MessageSquare,
  Bookmark,
} from "lucide-react";

export default function TemplatesPage() {
  const [templates, setTemplates] = useState<PageTemplate[]>([]);
  const [pages, setPages] = useState<Page[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Modal / Form state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  const [templateName, setTemplateName] = useState("");
  const [templateSlug, setTemplateSlug] = useState("");
  const [selectedPageId, setSelectedPageId] = useState("");
  const [sections, setSections] = useState<PageTemplateSection[]>([]);

  // Deletion confirm state
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setTemplates(api.getTemplates());
    const dynamicPages = api.getPages();
    setPages(dynamicPages);
  };

  const handleNameChange = (name: string) => {
    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
    setTemplateName(name);
    setTemplateSlug(slug);
  };

  const handleOpenAdd = () => {
    setEditingId(null);
    setTemplateName("");
    setTemplateSlug("");
    setSelectedPageId(pages[0]?.id || "");
    setSections([]);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (template: PageTemplate) => {
    setEditingId(template.id);
    setTemplateName(template.name);
    setTemplateSlug(template.slug);
    setSelectedPageId(template.pageId);
    // Sort sections by order before editing
    const sorted = [...template.sections].sort((a, b) => a.order - b.order);
    setSections(sorted);
    setIsModalOpen(true);
  };

  const handleAddSection = (type: PageTemplateSection["type"]) => {
    const newSection: PageTemplateSection = {
      id: `sec-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      type,
      title: `Dynamic ${type.charAt(0).toUpperCase() + type.slice(1)} Section`,
      subtitle: type === "hero" || type === "cta" ? "Premium wood-bonding options tailored for perfection." : undefined,
      content: type === "features" || type === "text" ? "Configure detailed structural wood engineering instructions here." : undefined,
      image: type === "hero" ? "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop" : undefined,
      ctaText: type === "hero" || type === "cta" ? "Learn More" : undefined,
      ctaLink: type === "hero" || type === "cta" ? "#action-path" : undefined,
      order: sections.length + 1,
    };
    setSections((prev) => [...prev, newSection]);
  };

  const handleDeleteSection = (secId: string) => {
    const remaining = sections.filter((s) => s.id !== secId);
    // Re-adjust ordering indexes
    const updated = remaining.map((s, idx) => ({ ...s, order: idx + 1 }));
    setSections(updated);
  };

  const handleMoveSection = (idx: number, direction: "up" | "down") => {
    const targetIdx = direction === "up" ? idx - 1 : idx + 1;
    if (targetIdx < 0 || targetIdx >= sections.length) return;

    const list = [...sections];
    // Swap items
    const temp = list[idx];
    list[idx] = list[targetIdx];
    list[targetIdx] = temp;

    // Reset order numbers based on array index
    const reordered = list.map((s, i) => ({ ...s, order: i + 1 }));
    setSections(reordered);
  };

  const handleSectionFieldChange = (secId: string, field: keyof PageTemplateSection, value: string) => {
    setSections((prev) =>
      prev.map((s) => (s.id === secId ? { ...s, [field]: value } : s))
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    api.saveTemplate({
      id: editingId || undefined,
      name: templateName,
      slug: templateSlug,
      pageId: selectedPageId,
      isActive: editingId ? (templates.find((t) => t.id === editingId)?.isActive || false) : false,
      sections,
    });
    setIsModalOpen(false);
    loadData();
  };

  const handleToggleActivate = (id: string) => {
    api.activateTemplate(id);
    loadData();
  };

  const handleDeleteTemplate = (id: string) => {
    api.deleteTemplate(id);
    setDeleteConfirmId(null);
    loadData();
  };

  // Filter templates
  const filteredTemplates = templates.filter((t) => {
    const pageName = pages.find((p) => p.id === t.pageId)?.title || "";
    const matchesSearch =
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      pageName.toLowerCase().includes(search.toLowerCase());
    return matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredTemplates.length / itemsPerPage) || 1;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTemplates = filteredTemplates.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <AdminLayout>
      <div className="space-y-6 animate-[fadeIn_0.2s_ease-out]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-foreground tracking-tight">
              Page Templates Manager
            </h1>
            <p className="text-sm font-semibold text-foreground/45 uppercase tracking-wider">
              Assemble multiple dynamic sections layouts, assign page targets, and activate live layouts
            </p>
          </div>
          <button
            onClick={handleOpenAdd}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary hover:opacity-90 text-white font-bold text-sm shadow-md shadow-primary/10 cursor-pointer transition-all self-start sm:self-auto"
          >
            <Plus className="h-5 w-5" />
            <span>Assemble Template</span>
          </button>
        </div>

        {/* Filters Panel */}
        <div className="bg-background border border-border p-4 rounded-2xl shadow-sm transition-colors duration-300">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-3.5 h-4.5 w-4.5 text-foreground/40" />
            <input
              type="text"
              placeholder="Search templates, dynamic targets..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-surface/50 text-sm outline-none focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/20 dark:focus:border-primary"
            />
          </div>
        </div>

        {/* Database Table */}
        <div className="bg-background border border-border rounded-3xl overflow-hidden shadow-sm transition-colors duration-300">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border bg-surface/55">
                  <th className="p-5 text-xs font-bold text-foreground/45 uppercase tracking-wider">Template Layout</th>
                  <th className="p-5 text-xs font-bold text-foreground/45 uppercase tracking-wider">Mapped Page Target</th>
                  <th className="p-5 text-xs font-bold text-foreground/45 uppercase tracking-wider">Sections Plan</th>
                  <th className="p-5 text-xs font-bold text-foreground/45 uppercase tracking-wider">Activation Trigger</th>
                  <th className="p-5 text-xs font-bold text-foreground/45 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {currentTemplates.length > 0 ? (
                  currentTemplates.map((temp) => {
                    const page = pages.find((p) => p.id === temp.pageId);
                    return (
                      <tr key={temp.id} className="hover:bg-surface/30 transition-colors">
                        <td className="p-5">
                          <div className="flex items-center gap-3">
                            <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                              <Layers className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-extrabold text-sm text-foreground">{temp.name}</p>
                              <p className="text-[10px] text-foreground/45 font-bold uppercase tracking-wider">{temp.slug}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-5 text-sm font-semibold text-foreground/80">
                          {page ? page.title : "Unassigned Page Reference"}
                        </td>
                        <td className="p-5">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-surface text-foreground/80 border border-border">
                            <Sliders className="h-3.5 w-3.5 text-primary" />
                            <span>{temp.sections.length} blocks configured</span>
                          </span>
                        </td>
                        <td className="p-5">
                          <div className="flex items-center gap-2">
                            {temp.isActive ? (
                              <button
                                onClick={() => handleToggleActivate(temp.id)}
                                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-green-600 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900/30 cursor-pointer"
                                title="Click to deactivate template"
                              >
                                <CheckCircle2 className="h-4 w-4 shrink-0" />
                                <span>LIVE ACTIVE</span>
                              </button>
                            ) : (
                              <button
                                onClick={() => handleToggleActivate(temp.id)}
                                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-foreground/50 bg-surface border border-border hover:bg-primary/5 hover:text-primary transition-all cursor-pointer"
                                title="Click to set layout live"
                              >
                                <AlertCircle className="h-4 w-4 shrink-0" />
                                <span>Draft (Make Live)</span>
                              </button>
                            )}
                          </div>
                        </td>
                        <td className="p-5 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => handleOpenEdit(temp)}
                              className="p-2 rounded-lg bg-surface hover:bg-primary/10 text-foreground/60 hover:text-primary transition-all cursor-pointer border border-border"
                              title="Edit templates plan"
                            >
                              <Edit2 className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => setDeleteConfirmId(temp.id)}
                              className="p-2 rounded-lg bg-surface hover:bg-primary/10 text-foreground/60 hover:text-primary transition-all cursor-pointer border border-border"
                              title="Delete template"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={5} className="p-10 text-center text-sm font-semibold text-foreground/40 bg-surface/5">
                      No templates compiled for custom pages.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between px-6 py-4 border-t border-border bg-surface/20">
              <span className="text-xs font-bold text-foreground/45 uppercase tracking-wider">
                Page {currentPage} of {totalPages}
              </span>
              <div className="flex gap-2">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-bold border border-border text-foreground hover:bg-surface disabled:opacity-40 cursor-pointer"
                >
                  Previous
                </button>
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-bold border border-border text-foreground hover:bg-surface disabled:opacity-40 cursor-pointer"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ==================== CREATE/EDIT MODAL & visual SECTIONS BUILDER ==================== */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <div className="bg-background border border-border w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl animate-[modalShow_0.2s_ease-out] flex flex-col max-h-[85vh]">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-border shrink-0 bg-surface/30">
                <h3 className="text-lg font-black text-foreground flex items-center gap-2">
                  <Layers className="h-5 w-5 text-primary" />
                  <span>{editingId ? "Assemble Dynamic Page Layout" : "Configure Dynamic Sections Template"}</span>
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-lg bg-surface text-foreground/60 hover:text-foreground cursor-pointer border border-border"
                >
                  <X className="h-4.5 w-4.5" />
                </button>
              </div>

              {/* Scrollable Form & Builder */}
              <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Meta Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 bg-surface/35 border border-border rounded-2xl">
                  <div>
                    <label className="block text-xs font-bold text-foreground/50 uppercase tracking-wider mb-2">
                      Template Layout Name
                    </label>
                    <input
                      type="text"
                      required
                      value={templateName}
                      onChange={(e) => handleNameChange(e.target.value)}
                      placeholder="e.g. Consultation Landing Layout"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground/50 uppercase tracking-wider mb-2 flex items-center justify-between">
                      <span>Slug Path</span>
                      <span className="text-[10px] text-primary flex items-center gap-1">
                        <Sparkles className="h-3 w-3" /> Auto
                      </span>
                    </label>
                    <input
                      type="text"
                      required
                      value={templateSlug}
                      onChange={(e) => setTemplateSlug(e.target.value)}
                      placeholder="consultation-landing"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground/50 uppercase tracking-wider mb-2">
                      Map to Dynamic Page
                    </label>
                    <select
                      value={selectedPageId}
                      onChange={(e) => setSelectedPageId(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm outline-none focus:border-primary"
                    >
                      {pages.map((p) => (
                        <option key={p.id} value={p.id}>{p.title} (/{p.slug})</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* visual Section Builder Title */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-3 shrink-0">
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-extrabold text-foreground flex items-center gap-2">
                      <Sliders className="h-4.5 w-4.5 text-primary" />
                      <span>Interactive Layout Sections Builder</span>
                    </h4>
                    <p className="text-[11px] text-foreground/50 font-bold uppercase tracking-wider">
                      Construct layouts by inserting, reordering, and mapping specific sections
                    </p>
                  </div>

                  {/* Add Block Toolbar */}
                  <div className="flex flex-wrap gap-1.5 bg-surface p-1.5 border border-border rounded-xl">
                    <button
                      type="button"
                      onClick={() => handleAddSection("hero")}
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-black uppercase bg-background text-foreground/80 hover:text-primary transition-all border border-border cursor-pointer"
                    >
                      <Layout className="h-3 w-3 text-primary" /> + Hero
                    </button>
                    <button
                      type="button"
                      onClick={() => handleAddSection("features")}
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-black uppercase bg-background text-foreground/80 hover:text-primary transition-all border border-border cursor-pointer"
                    >
                      <Sliders className="h-3 w-3 text-primary" /> + Features
                    </button>
                    <button
                      type="button"
                      onClick={() => handleAddSection("text")}
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-black uppercase bg-background text-foreground/80 hover:text-primary transition-all border border-border cursor-pointer"
                    >
                      <Type className="h-3 w-3 text-primary" /> + Text
                    </button>
                    <button
                      type="button"
                      onClick={() => handleAddSection("cta")}
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-black uppercase bg-background text-foreground/80 hover:text-primary transition-all border border-border cursor-pointer"
                    >
                      <Bookmark className="h-3 w-3 text-primary" /> + CTA
                    </button>
                    <button
                      type="button"
                      onClick={() => handleAddSection("testimonials")}
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-black uppercase bg-background text-foreground/80 hover:text-primary transition-all border border-border cursor-pointer"
                    >
                      <MessageSquare className="h-3 w-3 text-primary" /> + Review
                    </button>
                  </div>
                </div>

                {/* visual Editor Panel */}
                <div className="space-y-4">
                  {sections.length > 0 ? (
                    sections.map((sec, idx) => {
                      return (
                        <div
                          key={sec.id}
                          className="bg-surface/35 border border-border rounded-2xl overflow-hidden p-5 space-y-4 animate-[fadeIn_0.15s_ease-out] relative"
                        >
                          {/* Section Header Controls */}
                          <div className="flex items-center justify-between border-b border-border/80 pb-3">
                            <div className="flex items-center gap-2">
                              <span className="h-6 px-2.5 rounded bg-primary text-white text-[10px] font-black uppercase tracking-wider flex items-center justify-center shadow shadow-primary/20">
                                {sec.type} block
                              </span>
                              <span className="text-xs font-bold text-foreground/50">
                                Section order: #{sec.order}
                              </span>
                            </div>

                            <div className="flex items-center gap-1">
                              <button
                                type="button"
                                disabled={idx === 0}
                                onClick={() => handleMoveSection(idx, "up")}
                                className="p-1.5 rounded-lg bg-background border border-border text-foreground hover:text-primary disabled:opacity-40 cursor-pointer"
                                title="Move Up"
                              >
                               <ArrowUp className="h-3.5 w-3.5" />
                              </button>
                              <button
                                type="button"
                                disabled={idx === sections.length - 1}
                                onClick={() => handleMoveSection(idx, "down")}
                                className="p-1.5 rounded-lg bg-background border border-border text-foreground hover:text-primary disabled:opacity-40 cursor-pointer"
                                title="Move Down"
                              >
                               <ArrowDown className="h-3.5 w-3.5" />
                              </button>
                              <button
                                type="button"
                                onClick={() => handleDeleteSection(sec.id)}
                                className="p-1.5 rounded-lg bg-background border border-border text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 cursor-pointer ml-1"
                                title="Delete Section Block"
                              >
                               <Trash className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          </div>

                          {/* Dynamic Inputs depending on layout type */}
                          <div className="space-y-3">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-[10px] font-bold text-foreground/50 uppercase tracking-wider mb-1">
                                  Section Title
                                </label>
                                <input
                                  type="text"
                                  required
                                  value={sec.title}
                                  onChange={(e) => handleSectionFieldChange(sec.id, "title", e.target.value)}
                                  placeholder="Configure section main header..."
                                  className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-xs outline-none focus:border-primary"
                                />
                              </div>

                              {(sec.type === "hero" || sec.type === "cta") && (
                                <div>
                                  <label className="block text-[10px] font-bold text-foreground/50 uppercase tracking-wider mb-1">
                                    Section Subtitle / Tagline
                                  </label>
                                  <input
                                    type="text"
                                    value={sec.subtitle || ""}
                                    onChange={(e) => handleSectionFieldChange(sec.id, "subtitle", e.target.value)}
                                    placeholder="Write a descriptive visual summary..."
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-xs outline-none focus:border-primary"
                                  />
                                </div>
                              )}
                            </div>

                            {sec.type === "hero" && (
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="sm:col-span-2">
                                  <label className="block text-[10px] font-bold text-foreground/50 uppercase tracking-wider mb-1">
                                    Illustration/Image URL link
                                  </label>
                                  <input
                                    type="url"
                                    value={sec.image || ""}
                                    onChange={(e) => handleSectionFieldChange(sec.id, "image", e.target.value)}
                                    placeholder="https://images.unsplash.com/..."
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-xs outline-none focus:border-primary"
                                  />
                                </div>
                                <div>
                                  <label className="block text-[10px] font-bold text-foreground/50 uppercase tracking-wider mb-1">
                                    CTA Button text & link
                                  </label>
                                  <div className="flex gap-1.5">
                                    <input
                                      type="text"
                                      value={sec.ctaText || ""}
                                      onChange={(e) => handleSectionFieldChange(sec.id, "ctaText", e.target.value)}
                                      placeholder="Apply Now"
                                      className="w-1/2 px-2 py-2.5 rounded-xl border border-border bg-background text-xs outline-none focus:border-primary"
                                    />
                                    <input
                                      type="text"
                                      value={sec.ctaLink || ""}
                                      onChange={(e) => handleSectionFieldChange(sec.id, "ctaLink", e.target.value)}
                                      placeholder="#register"
                                      className="w-1/2 px-2 py-2.5 rounded-xl border border-border bg-background text-xs outline-none focus:border-primary"
                                    />
                                  </div>
                                </div>
                              </div>
                            )}

                            {sec.type === "cta" && (
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-[10px] font-bold text-foreground/50 uppercase tracking-wider mb-1">
                                    CTA Button Label Text
                                  </label>
                                  <input
                                    type="text"
                                    value={sec.ctaText || ""}
                                    onChange={(e) => handleSectionFieldChange(sec.id, "ctaText", e.target.value)}
                                    placeholder="Button action name..."
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-xs outline-none focus:border-primary"
                                  />
                                </div>
                                <div>
                                  <label className="block text-[10px] font-bold text-foreground/50 uppercase tracking-wider mb-1">
                                    CTA Destination Link (# or URL)
                                  </label>
                                  <input
                                    type="text"
                                    value={sec.ctaLink || ""}
                                    onChange={(e) => handleSectionFieldChange(sec.id, "ctaLink", e.target.value)}
                                    placeholder="#action-url"
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-xs outline-none focus:border-primary"
                                  />
                                </div>
                              </div>
                            )}

                            {(sec.type === "features" || sec.type === "text" || sec.type === "testimonials") && (
                              <div>
                                <label className="block text-[10px] font-bold text-foreground/50 uppercase tracking-wider mb-1">
                                  Section Paragraph / Content Block (Markdown/Bullets supported)
                                </label>
                                <textarea
                                  rows={4}
                                  value={sec.content || ""}
                                  onChange={(e) => handleSectionFieldChange(sec.id, "content", e.target.value)}
                                  placeholder="Write detailed layout text paragraphs or bullet items..."
                                  className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-xs outline-none focus:border-primary resize-none"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="p-10 border-2 border-dashed border-border text-center text-xs font-semibold text-foreground/40 rounded-2xl">
                      🚀 Setup dynamic page structures by adding sections from the toolbar above!
                    </div>
                  )}
                </div>
              </form>

              {/* Modal Footer Controls */}
              <div className="flex items-center justify-end gap-3 p-6 border-t border-border shrink-0 bg-surface/30">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-3 rounded-xl text-sm font-bold border border-border text-foreground hover:bg-surface cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-6 py-3 rounded-xl text-sm font-bold bg-primary hover:opacity-90 text-white shadow-md shadow-primary/10 cursor-pointer"
                >
                  {editingId ? "Save Dynamic Layout" : "Publish Layout"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ==================== DELETE CONFIRM DIALOG ==================== */}
        {deleteConfirmId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <div className="bg-background border border-border w-full max-w-md rounded-3xl overflow-hidden shadow-2xl p-6 space-y-4 animate-[modalShow_0.15s_ease-out]">
              <h3 className="text-lg font-black text-foreground">
                Confirm Deletion
              </h3>
              <p className="text-sm text-foreground/60 leading-relaxed font-medium">
                Are you absolutely sure you want to delete this dynamic layout template? This will permanently erase its sections and details.
              </p>
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setDeleteConfirmId(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold border border-border text-foreground hover:bg-surface cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDeleteTemplate(deleteConfirmId)}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-primary text-white cursor-pointer"
                >
                  Confirm Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes modalShow {
            0% { opacity: 0; transform: scale(0.95); }
            100% { opacity: 1; transform: scale(1); }
          }
        `
      }} />
    </AdminLayout>
  );
}
