import json
import os

json_path = "questions/concepts.json"
doc_path = "doc"

with open(json_path, "r", encoding="utf-8") as f:
    data = json.load(f)

for category, concepts in data.items():
    folder_name = category.replace(" ", "_")
    cat_dir = os.path.join(doc_path, folder_name)
    
    for concept in concepts:
        name = concept["name"]
        
        # Handle some special names
        if name == "XGBoost_LightGBM":
            md_file = os.path.join(cat_dir, "XGBoost LightGBM.md")
            if not os.path.exists(md_file):
                md_file = os.path.join(cat_dir, f"{name}.md")
        elif name == "Word2Vec_GloVe_FastText":
            md_file = os.path.join(cat_dir, "Word2Vec GloVe FastText.md")
            if not os.path.exists(md_file):
                md_file = os.path.join(cat_dir, f"{name}.md")
        elif name == "Open vs Closed Source":
            md_file = os.path.join(cat_dir, "Open vs Closed Source.md")
            if not os.path.exists(md_file):
                md_file = os.path.join(cat_dir, f"{name}.md")
        else:
            md_file = os.path.join(cat_dir, f"{name}.md")

        if not os.path.exists(md_file):
            print(f"File not found: {md_file}")
            continue
            
        with open(md_file, "r", encoding="utf-8") as mf:
            lines = mf.readlines()
            
        current_section = None
        concept_text = []
        use_cases = []
        related = []
        
        for line in lines:
            line = line.strip()
            if line.startswith("> **📝 概念解釋：**"):
                current_section = "concept"
                continue
            elif line.startswith("> **💡 使用場景：**"):
                current_section = "use_cases"
                continue
            elif line.startswith("> **🔗 關聯關鍵字：**"):
                current_section = "related"
                continue
                
            if line.startswith(">"):
                text = line[1:].strip()
                if not text:
                    continue
                
                if current_section == "concept":
                    concept_text.append(text)
                elif current_section == "use_cases":
                    use_cases.append(text)
                elif current_section == "related":
                    words = [w.strip(" `") for w in text.split(",")]
                    related.extend([w for w in words if w])
                    
        concept_str = "\n".join(concept_text).strip()
        if concept_str and concept_str != "目前尚無解釋" and "目前尚無解釋" not in concept_str:
            concept["concept"] = concept_str
            
        if use_cases:
            concept["use_cases"] = use_cases
            
        if related:
            concept["related"] = related

with open(json_path, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Done parsing")
