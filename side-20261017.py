# small utilities, no deps

def group_by(items, key):
    out = {}
    for it in items:
        out.setdefault(key(it), []).append(it)
    return out

def most_common(xs):
    return max(set(xs), key=xs.count) if xs else None

def load_lines(path):
    with open(path, encoding="utf-8") as f:
        return [ln.strip() for ln in f if ln.strip()]

if __name__ == "__main__":
    print(list(chunks(range(27), 2)))
