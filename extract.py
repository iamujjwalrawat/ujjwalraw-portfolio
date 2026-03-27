import sys
try:
    import pypdf
except ImportError:
    print("pypdf not installed. Please pip install it.")
    sys.exit(1)

text = ""
with open("resume.pdf", "rb") as f:
    reader = pypdf.PdfReader(f)
    for page in reader.pages:
        text += page.extract_text() + "\n"

print(text)
